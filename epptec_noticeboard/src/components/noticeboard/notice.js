import { shortenText } from "../../utils/shortenText";

const Notice = ({ id, author, title, body, commentNumber }) => {
  const resizeBody = shortenText(body, 97);
  return (
    <div className="max-w-sm mx-auto bg-neutral-400 rounded-lg shadow p-4 mb-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm ">{author}</p>
      <p className=" mt-2">{resizeBody}</p>
      <div className="flex justify-between items-center mt-4">
        <a href="" className="text-grey-600 hover:text-rose-800 text-sm">
          Show more...
        </a>
        <a href="" className="text-grey-600 hover:text-rose-800 text-sm">
          Comments ({commentNumber})
        </a>
      </div>
    </div>
  );
};

export default Notice;
