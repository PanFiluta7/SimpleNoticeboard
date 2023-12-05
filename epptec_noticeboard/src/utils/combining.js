import { fetchNotices, fetchAuthors, fetchComments } from "./fetching";

export const noticesWithAuthorsComments = async () => {
  const notices = await fetchNotices();
  const authors = await fetchAuthors();
  const comments = await fetchComments();

  const noticesWithAuthorsComments = notices.map((notice) => {
    const authorName = authors.find((a) => a.id === notice.userId);
    const commentNumber = comments.filter(
      (comment) => comment.postId === notice.id
    ).length;
    return {
      ...notice,
      authorName: authorName ? authorName.name : "Anonymous",
      commentNumber: commentNumber,
    };
  });
  return noticesWithAuthorsComments;
};
export const detailPostData = async (postId) => {
  const notices = await fetchNotices();
  const authors = await fetchAuthors();
  const comments = await fetchComments();

  const notice = notices.filter((post) => post.id === postId);
  if (notice.length !== 1) {
    return { notice: null, author: null, comments: [] };
  }

  const author = authors.filter((author) => author.id === notice[0].userId);
  const commentOfPost = comments.filter(
    (comment) => comment.postId === notice[0].id
  );
  return {
    title: notice[0].title,
    author: author[0].name,
    body: notice[0].body,
    comments: commentOfPost,
  };
};
