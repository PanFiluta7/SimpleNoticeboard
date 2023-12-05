import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailPostData } from "../utils/combining";

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const parsedPostId = parseInt(postId);
      const postData = await detailPostData(parsedPostId);
      setPost(postData);
      console.log(postData);
    };
    fetchPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <p>Hurdur</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {/* Add more post details if needed */}
    </div>
  );
};

export default PostPage;
