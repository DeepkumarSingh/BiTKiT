import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AllQuestions from "../LandingPg/AllQuestions"; 
import "./TagQuestions.css";

const TagQuestions = () => {
  const { tag } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestionsByTag = async () => {
      try {
        const res = await axios.get(`/api/v1/forum/questions/tag/${tag}`);
        setQuestions(res.data || []);
      } catch (err) {
        console.error("Error fetching questions by tag:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestionsByTag();
  }, [tag]);

  return (
    <div className="tagged-questions-page">
      <h2>Questions tagged with <span className="highlight-tag">"{tag}"</span></h2>
      {loading ? (
        <p>Loading questions...</p>
      ) : questions.length > 0 ? (
        questions.map((question) => (
          <AllQuestions key={question._id} question={question} />
        ))
      ) : (
        <p>No questions found with the tag <strong>{tag}</strong>.</p>
      )}
    </div>
  );
};

export default TagQuestions;
