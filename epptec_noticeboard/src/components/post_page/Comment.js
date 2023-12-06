const Comment = ({ title, email, body }) => {
  return (
    <div className="mx-auto bg-neutral-600 rounded-md p-4 mb-1">
      <h4 className="text-md font-semibold mb-1">{title}</h4>
      <p className="text-xs mb-2">{email}</p>
      <p className="text-sm">{body}</p>
    </div>
  );
};

export default Comment;
