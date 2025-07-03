import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AllQuestions from "./AllQuestions";
import ConnectWithoutContactTwoToneIcon from '@mui/icons-material/ConnectWithoutContactTwoTone';

function Main({ questions }) {
  const [filter, setFilter] = useState("Newest");
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    let sortedQuestions = [...questions];

    switch (filter) {
      case "Most Viewed":
        sortedQuestions.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case "Most Voted":
        sortedQuestions.sort((a, b) => (b.votes || 0) - (a.votes || 0));
        break;
      case "Unanswered":
        sortedQuestions = sortedQuestions.filter(
          (q) => !q.answerDetails || q.answerDetails.length === 0
        );
        break;
      case "Newest":
      default:
        sortedQuestions.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
    }

    setFilteredQuestions(sortedQuestions);
  }, [questions, filter]);

  return (
    <div className="flex flex-col flex-1 py-10 px-4 sm:px-8 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-blue-700 dark:text-blue-300">
          <ConnectWithoutContactTwoToneIcon className="text-inherit" />
          Join the discussion, share your thoughts
        </h2>
        <Link to="/add-question">
          <button className="mt-4 sm:mt-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-md shadow hover:shadow-lg transition-all">
            Ask Question
          </button>
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-300 dark:border-gray-700 pb-4 mb-4 gap-3">
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 ml-1">
          {filteredQuestions.length} {filteredQuestions.length === 1 ? "Question" : "Questions"}
        </p>
        <div className="flex flex-wrap gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow-inner">
          {["Newest", "Most Viewed", "Most Voted", "Unanswered"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 focus:outline-none
              ${
                filter === tab
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-700 dark:text-gray-300 hover:bg-blue-200 dark:hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q, index) => (
            <div
              key={q._id || index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <AllQuestions question={q} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-6">No questions found.</p>
        )}
      </div>
    </div>
  );
}

export default Main;
