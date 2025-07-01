import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import parse from "html-react-parser";

function AllQuestions({ question }) {
  function truncateString(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const tags = Array.isArray(question?.tags) ? question.tags : [];
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="w-full py-6 border-b border-gray-200 bg-[#fafbfc] hover:bg-[#f0f2f6] transition duration-200  dark:bg-gray-900 text-black dark:text-white">
      <div className="flex flex-col md:flex-row justify-between w-full gap-7 items-start px-4 md:px-0">
        <div className="flex flex-row md:flex-col items-center min-w-[90px] pr-7">
          <div className="flex flex-col items-center text-gray-600 text-sm gap-2">
            <div className="flex flex-col items-center mb-2 bg-[#f3f6fa] rounded-md px-3 py-2 min-w-[60px] shadow-sm">
              <p className="text-lg font-semibold text-blue-600 m-0">{question?.votes}</p>
              <span className="text-xs text-gray-500 mt-1">votes</span>
            </div>
            <div className="flex flex-col items-center mb-2 bg-[#f3f6fa] rounded-md px-3 py-2 min-w-[60px] shadow-sm">
              <p className="text-lg font-semibold text-blue-600 m-0">{question?.answerDetails?.length || 0}</p>
              <span className="text-xs text-gray-500 mt-1">answers</span>
            </div>
            <div className="text-xs text-gray-500">
              {question?.views || 0} Views
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-2">
          <Link to={`/view-question?q=${question?._id}`} className="text-blue-600 text-xl font-bold mb-1 hover:text-blue-800 break-words">
            {question?.title}
          </Link>

          <div className="w-[90%] text-gray-700 text-base leading-relaxed break-words">
            {parse(truncateString(question.body, 200))}
          </div>

          <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <p
                key={`${tag}-${index}`}
                className="m-2 px-3 py-1 bg-[#007cd446] rounded text-sm"
              >
                {tag}
              </p>
            ))}
          </div>

          <div className="flex flex-col ml-auto text-right gap-1">
            <small className="text-gray-500 text-xs">
              📅 Posted on {new Date(question?.created_at).toLocaleString()}
            </small>
            <div className="flex items-center justify-end gap-2">
              <Avatar src={user?.photoURL || ""} className="w-8 h-8 text-sm bg-blue-600 text-white" />
              <div className="font-medium text-gray-800 text-sm">
                {user?.displayName || "Unknown User"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
