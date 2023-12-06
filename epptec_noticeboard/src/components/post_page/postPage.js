import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { detailPostData } from "../../utils/combining";
import Comment from "./Comment";

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      const parsedPostId = parseInt(postId);
      const postData = await detailPostData(parsedPostId);
      setPost(postData);
    };
    fetchPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-neutral-800 p-6 rounded-lg border-2 text-white border-stone-200 w-full max-w-2xl">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Back to the Notice Board
        </Link>
        {post.title && post.author && post.body ? (
          <>
            <h1 className="text-xl font-bold my-2">{post.title}</h1>
            <p className="text-l mb-4">{post.author}</p>
            <p className="text-sm my-4">{post.body}</p>
            <h2 className="text-lg font-bold mt-6 mb-2">Comments</h2>
            <div className="flex flex-col items-start">
              {post.comments.map((comment) => (
                <Comment
                  key={comment.id} // Assuming each comment has a unique ID
                  title={comment.name}
                  email={comment.email}
                  body={comment.body}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold my-2">
              Sorry, no such post exists in our database.
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default PostPage;
