import React, { use, useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import Tooltip from "@mui/material/Tooltip";

import { Avatar } from "@mui/material";
import ReactQuill from "react-quill";
import ReactHtmlParser from "html-react-parser";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "react-quill/dist/quill.snow.css";
import "./index.css";

dayjs.extend(relativeTime);

function MainQn() {
  const [show, setShow] = useState(false);
  const [questionData, setQuestionData] = useState(null);
  const [answer, setAnswer] = useState("");
  const [comments, setComments] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const id = new URLSearchParams(window.location.search).get("q");

  const hasIncrementedView = useRef(false);

  const getQuestionDetails = async () => {
    try {
      const res = await axios.get(`/api/v1/forum/questions/${id}`);
      setQuestionData(Array.isArray(res.data) ? res.data[0] : res.data);
    } catch (err) {
      console.error("Error fetching question details:", err);
    }
  };

  useEffect(() => {
    getQuestionDetails();

    if (!hasIncrementedView.current) {
      fetch(`/api/v1/forum/questions/${id}/view`, { method: "PUT" }).catch(
        (err) => console.error("Error updating views", err)
      );
      hasIncrementedView.current = true;
    }
  }, [id]);

  const handleQuillChange = (value) => setAnswer(value);

  const handleSubmit = async () => {
    if (!answer || !user) return;

    const body = {
      question_id: id,
      answer,
      user: user._id,
    };

    try {
      await axios.post("/api/v1/forum/answers", body, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Answer added successfully!");
      setAnswer("");
      getQuestionDetails();
    } catch (err) {
      console.error("Error submitting answer:", err);
    }
  };

  const handleComments = async () => {
    if (!comments || !user) return;

    const body = {
      question_id: id,
      comment: comments,
      user: user._id,
    };

    try {
      await axios.post(`/api/v1/forum/comments/${id}`, body);
      alert("Comment added successfully!");
      setComments("");
      setShow(false);
      getQuestionDetails();
    } catch (err) {
      console.error("Error submitting comment:", err);
    }
  };

  const handleVote = async (type, targetId, isAnswer = false) => {
    if (!user?._id) return alert("Please log in");

    const endpoint = isAnswer
      ? `/api/v1/forum/answers/${targetId}/vote`
      : `/api/v1/forum/questions/${targetId}/vote`;

    try {
      await axios.post(endpoint, {
        voteType: type,
        userId: user._id,
      });
      getQuestionDetails();
    } catch (err) {
      console.error("Vote failed:", err.response?.data || err);
      alert(err.response?.data?.message || "Failed to vote.");
    }
  };

  const getLastActivityTime = () => {
    if (!questionData) return "Unknown";

    const timestamps = [];

    // Add question creation time
    if (questionData.createdAt) {
      const createdDate = new Date(questionData.createdAt);
      if (isNaN(createdDate.getTime())) {
        console.error("Invalid createdAt date:", questionData.createdAt);
        timestamps.push(new Date()); // Fallback to current time
      } else {
        timestamps.push(createdDate);
      }
    }

    // Add answer timestamps
    if (questionData.answerDetails?.length > 0) {
      questionData.answerDetails.forEach((answer) => {
        if (answer.createdAt) {
          const answerDate = new Date(answer.createdAt);
          if (isNaN(answerDate.getTime())) {
            console.error("Invalid answer createdAt date:", answer.createdAt);
          } else {
            timestamps.push(answerDate);
          }
        }
      });
    }

    // Add comment timestamps
    if (questionData.comments?.length > 0) {
      questionData.comments.forEach((comment) => {
        if (comment.createdAt) {
          const commentDate = new Date(comment.createdAt);
          if (isNaN(commentDate.getTime())) {
            console.error("Invalid comment createdAt date:", comment.createdAt);
          } else {
            timestamps.push(commentDate);
          }
        }
      });
    }

    if (timestamps.length === 0) return "Unknown";

    // Find the most recent timestamp
    const lastActivity = new Date(
      Math.max(...timestamps.map((date) => date.getTime()))
    );
    return dayjs(lastActivity).fromNow();
  };
  console.log("questionData", questionData);

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">{questionData?.title}</h2>
          <Link to="/add-question">
            <button className="ask-question-button">Ask Question</button>
          </Link>
        </div>

        <div className="main-desc">
          <div className="info">
            <p>{new Date(questionData?.createdAt).toLocaleString()}</p>
            <p>
              Active <span>{getLastActivityTime()}</span>
            </p>
            <p>
              Viewed <span>{questionData?.views || 0} times</span>
            </p>
          </div>
        </div>

        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <Tooltip title="Upvote" arrow>
                  <ThumbUpAltOutlinedIcon
                    className="vote-icon"
                    onClick={() => handleVote("upvote", questionData?._id)}
                  />
                </Tooltip>
                <p className="arrow">{questionData?.votes || 0}</p>
                <Tooltip title="Downvote" arrow>
                  <ThumbDownAltOutlinedIcon
                    className="vote-icon"
                    onClick={() => handleVote("downvote", questionData?._id)}
                  />
                </Tooltip>
                {/* <BookmarkIcon />
                <HistoryIcon /> */}
              </div>
            </div>

            <div className="question-answer">
              {questionData?.body
                ? ReactHtmlParser(questionData.body)
                : "Loading..."}
              <div className="author">
                <small>
                  📅Posted on{" "}
                  {new Date(questionData?.createdAt).toLocaleString()}
                </small>
                <div className="author-details">
                  <Avatar src={questionData?.userDetails?.photoURL} />
                  <p>{questionData?.userDetails?.displayName || "Unknown"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="comments">
          <div className="comment">
            {questionData?.comments?.map((_qd) => (
              <p key={_qd._id}>
                {_qd.comment}{" "}
                <span>- {_qd.userDetails?.displayName || "Anonymous"}</span>{" "}
                <small>
                  {(() => {
                    const date = new Date(_qd.created_at);
                    console.log(
                      "Raw created_at:",
                      _qd.created_at,
                      "Parsed date:",
                      date
                    );
                    return isNaN(date.getTime())
                      ? "Unknown"
                      : date.toLocaleString();
                  })()}
                </small>
              </p>
            ))}
          </div>

          <p onClick={() => setShow(!show)}>Add a comment</p>
          {show && (
            <div className="title">
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={5}
                placeholder="Add your comment"
                style={{
                  margin: "5px 0",
                  padding: "10px",
                  border: "1px solid rgba(0,0,0,0.2)",
                  borderRadius: "3px",
                  outline: "none",
                }}
              ></textarea>
              <button className="post-comment-button" onClick={handleComments}>
                Add comment
              </button>
            </div>
          )}
        </div>

        {/* Answers */}
        <div className="all-questions" style={{ flexDirection: "column" }}>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            {questionData?.answerDetails?.length} Answer(s)
          </p>
          {questionData?.answerDetails?.map((_q) => (
            <div key={_q._id} className="all-questions-container">
              <div className="all-questions-left">
                <div className="all-options">
                  <Tooltip title="Upvote" arrow>
                  <ThumbUpAltOutlinedIcon
                    className="vote-icon"
                    onClick={() => handleVote("upvote", _q._id,true)}
                  />
                </Tooltip>
                  <p className="arrow">{_q?.votes || 0}</p>
                  <Tooltip title="Downvote" arrow>
                  <ThumbDownAltOutlinedIcon
                    className="vote-icon"
                    onClick={() => handleVote("downvote", _q._id,true)}
                  />
                </Tooltip>
                  {/* <BookmarkIcon /> */}
                  {/* <HistoryIcon />. */}
                </div>
              </div>

              <div className="question-answer">
                <p>{ReactHtmlParser(_q.answer)}</p>
                <div className="author">
                  <small>
                    💡 Answered on {new Date(_q.created_at).toLocaleString()}
                  </small>
                  <div className="author-details">
                    <Avatar src={_q.userDetails?.photoURL} />
                    <p>{_q.userDetails?.displayName || "Unknown"}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Answer form */}
        <div className="main-answer">
          <h3 style={{ fontSize: "22px", fontWeight: "400", margin: "10px 0" }}>
            Your Answer
          </h3>
          <ReactQuill
            value={answer}
            onChange={handleQuillChange}
            className="react-quill"
            theme="snow"
            style={{ height: "200px" }}
          />
          <button
            className="post-answer-button"
            onClick={handleSubmit}
            style={{ marginTop: "50px" }}
          >
            Post your Answer
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainQn;
