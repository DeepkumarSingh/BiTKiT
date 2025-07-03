import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import parse from "html-react-parser";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";

function AllQuestions({ question }) {
  function truncateString(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const tags = Array.isArray(question?.tags) ? question.tags : [];
  const user = JSON.parse(localStorage.getItem("Users"));
console.log("Users from localStorage:", user);
  const userId = user?._id || "";

  const handleDeleteQuestion = async () => {
    if (!window.confirm("Are you sure you want to delete this question?"))
      return;

    try {
      console.log("Deleting question:", question._id);
      console.log("User ID from localStorage:", user._id);
      await axios.delete(`/api/v1/forum/questions/${question._id}`, {
        data: { userId: user._id },
      });
      alert("Question deleted successfully.");
      window.location.reload();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("You are not authorized to delete this question.");
    }
  };

  return (
    <div className="w-full py-6 border-b border-gray-200 dark:border-gray-700 bg-[#fafbfc] hover:bg-[#f0f2f6] dark:bg-gray-900 dark:hover:bg-gray-800 transition duration-200 text-black dark:text-white">
      <div className="flex flex-col md:flex-row justify-between w-full gap-7 items-start px-4 md:px-0">
        
        {/* Votes / Answers / Views Column */}
        <div className="flex flex-col items-center min-w-[90px] pr-7 rounded-md px-3 py-2 shadow-sm">
          {console.log("user:", user)}

          {/* Delete button only if user owns the question */}
          {user?._id === question?.userDetails?._id && (
            <button
              onClick={handleDeleteQuestion}
              className="text-blue-900 hover:text-red-800 mb-4"
              title="Delete this question"
            >
              <DeleteOutlineIcon />
            </button>
          )}

          <div className="flex flex-col items-center text-sm gap-2">
            <div className="flex flex-col items-center mb-2  rounded-md px-3 py-2 min-w-[60px] shadow-sm">
              <p className="text-lg font-semibold text-blue-600 m-0">
                {question?.votes}
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                votes
              </span>
            </div>

            <div className="flex flex-col items-center mb-2 rounded-md px-3 py-2 min-w-[60px] shadow-sm">
              <p className="text-lg font-semibold text-blue-600 m-0">
                {question?.answerDetails?.length || 0}
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                answers
              </span>
            </div>

            <div className="text-xs text-gray-500 dark:text-gray-400">
              {question?.views || 0} Views
            </div>
          </div>
        </div>

        {/* Main Content Column */}
        <div className="flex flex-col w-full gap-2">
          <Link
            to={`/view-question?q=${question?._id}`}
            className="text-blue-600 text-xl font-bold mb-1 hover:text-blue-800 dark:hover:text-blue-400 break-words"
          >
            {question?.title}
          </Link>

          <div className="w-[90%] text-gray-700 dark:text-gray-300 text-base leading-relaxed break-words">
            {parse(truncateString(question.body, 200))}
          </div>

          <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <p
                key={`${tag}-${index}`}
                className="m-2 px-3 py-1 bg-[#007cd446] dark:bg-[#007cd41a] text-[#004d80] dark:text-blue-300 rounded text-sm"
              >
                {tag}
              </p>
            ))}
          </div>

          {/* Posted By Section */}
          <div className="flex flex-col ml-auto text-right gap-1">
            <small className="text-gray-500 dark:text-gray-400 text-xs">
              📅 Posted on {new Date(question?.created_at).toLocaleString()}
            </small>
            {console.log("question:", question)}
            <div className="flex items-center justify-end gap-2">
              <Avatar
                src={question.userDetails?.photoURL || ""}
                className="w-8 h-8 text-sm bg-blue-600 text-white"
              />
              <div className="font-medium text-gray-800 dark:text-gray-100 text-sm">
                {question.userDetails?.displayName || "Unknown User"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
