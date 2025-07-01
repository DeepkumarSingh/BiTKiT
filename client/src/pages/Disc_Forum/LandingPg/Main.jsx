import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AllQuestions from "./AllQuestions";

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
    <div className="flex flex-col flex-1 py-8 box-border  dark:bg-gray-900 text-black dark:text-white ">
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full mb-5 px-5 box-border">
          <h2 className="font-semibold text-2xl md:text-3xl text-[#0a4a89] m-0">
            Join the discussion, share your thoughts💭💭
          </h2>
          <Link to="/add-question">
            <button className="mt-4 px-7 py-4 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-900 hover:shadow-lg transition-all duration-200">
              Ask Question
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 px-5 pb-4 mt-2 border-b border-gray-300 box-border">
          <div className="flex items-center justify-between flex-wrap flex-1">
            <p className="ml-4 font-medium">{filteredQuestions.length} Questions</p>
            <div className="flex items-center flex-wrap gap-3">
              <div className="flex bg-gray-100 rounded-full p-1 shadow-inner">
                {["Newest", "Most Viewed", "Most Voted", "Unanswered"].map((tab) => (
                  <div
                    key={tab}
                    className={`px-4 py-2 text-sm rounded-full cursor-pointer transition-all duration-300 ${
                      filter === tab
                        ? "bg-blue-500 text-white shadow-md"
                        : "bg-transparent text-gray-600 hover:bg-blue-100 hover:text-blue-500"
                    }`}
                    onClick={() => setFilter(tab)}
                  >
                    {tab}
                  </div>
                ))}
              </div>
              {/* <div className="flex items-center gap-1 px-3 py-2 rounded-md bg-blue-100 text-blue-800 text-sm font-medium cursor-pointer hover:bg-blue-200 hover:text-blue-900 shadow-sm transition-all duration-300">
                Filter
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full px-5 box-border">
          {filteredQuestions.map((q, index) => (
            <div
              key={q._id || index}
              className="flex flex-col py-4 border-b border-gray-300 w-full"
            >
              <AllQuestions question={q} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
