import { Link } from "react-router-dom";
import { shortenText } from "../../utils/shortenText";

const Notice = ({ id, author, title, body, commentNumber }) => {
  const resizeBody = shortenText(body, 97);
  return (
    <Link
      to={`/posts/${id}`}
      className="block max-w-md mx-auto bg-neutral-600 rounded-md p-4 mb-4 hover:bg-neutral-700"
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm ">{author}</p>
      <p className="mt-2">{resizeBody}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-grey-600 hover:text-rose-800 text-sm">
          Show more...
        </span>
        <span className="text-grey-600 hover:text-rose-800 text-sm">
          Comments ({commentNumber})
        </span>
      </div>
    </Link>
  );
};

export default Notice;
