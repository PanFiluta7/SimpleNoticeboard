import React from "react";
import { useState, useEffect } from "react";
import Notice from "./notice";
import { noticesWithAuthorsComments } from "../../utils/combining";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const noticesEnhanced = async () => {
      try {
        const noticeData = await noticesWithAuthorsComments();
        setNotices(noticeData);
      } catch (error) {
        console.error("Error Fetching Combined Notices:", error);
      }
    };
    noticesEnhanced();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-neutral-800 p-6 rounded-lg border-2 border-stone-200 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Notice Board
        </h2>
        <div className="flex flex-col">
          {notices.length > 0 ? (
            notices.map((notice) => (
              <Notice
                id={notice.id}
                author={notice.authorName}
                title={notice.title}
                body={notice.body}
                commentNumber={notice.commentNumber}
              />
            ))
          ) : (
            <p className="text-white text-center">No notices to display</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
