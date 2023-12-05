export const fetchNotices = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const fetchedNotices = await response.json();
    return fetchedNotices;
  } catch (error) {
    console.error("Error fetching Notices:", error);
  }
};
export const fetchAuthors = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const fetchedAuthors = await response.json();
    return fetchedAuthors;
  } catch (error) {
    console.error("Error fetching Authors:", error);
  }
};

export const fetchComments = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const fetchedComments = await response.json();
    return fetchedComments;
  } catch (error) {
    console.error("Error fetching Comments:", error);
  }
};
