import React from "react";
import { Routes, Route } from "react-router-dom";
import NoticeBoard from "./components/noticeboard/noticeBoard";
import PostPage from "./components/post_page/postPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NoticeBoard />} />
      <Route path="/posts/:postId" element={<PostPage />} />
    </Routes>
  );
};

export default AppRoutes;
