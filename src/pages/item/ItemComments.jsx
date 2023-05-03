import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";
import Map from "../../assets/Using-Google-Maps-to-Get-Around.png";

const ItemComments = ({ item }) => {
  const { updateDocument, response } = useFirestore("items");
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    await updateDocument(item.id, {
      comments: [...item.comments, commentToAdd],
    });
    if (!response.error) {
      setNewComment("");
    }
  };

  return (
    <div className="md:max-w-md lg:max-w-xl flex flex-col justify-center items-start mx-5">
      <div className="mb-10 w-full h-1/2 rounded-lg shadow-md ">
        <img className="w-full h-full object-cover" src={Map} alt="" />
      </div>
      <div className="w-full item-comments rounded-lg shadow-md  bg-gray-50 p-5 mb-10">
        <h4 className="font-bold text-amber-700 mb-3">Item Comments</h4>
        <ul>
          {item.comments.length === 0 && (
            <p className="text-gray-400 my-10">No comments yet</p>
          )}
          {item.comments.length > 0 &&
            item.comments.map((comment) => (
              <li key={comment.id}>
                <div className="comment-author">
                  <Avatar src={comment.photoURL} />
                  <p>{comment.displayName}</p>
                </div>
                <div className="comment-date">
                  <p>date here</p>
                </div>
                <div className="comment-content">
                  <p>{comment.content}</p>
                </div>
              </li>
            ))}
        </ul>
        {user && (
          <form className="add-comments" onSubmit={handleSubmit}>
            <label>
              <span>Add a comment</span>
              <textarea
                required
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
              ></textarea>
            </label>
            <button className="text-white text-sm px-8 py-2 border-2 rounded-md bg-amber-500 hover:border-2 hover:border-amber-500 hover:bg-transparent hover:text-amber-500 ">
              Add Comment
            </button>
          </form>
        )}
      </div>
      {!user && (
        <p>
          <Link to="/login" className="underline text-amber-700">
            <span>Login</span>
          </Link>
          <span> or </span>
          <Link to="/signup" className="underline text-amber-700">
            <span>Signup</span>
          </Link>
          <span> to comment</span>
        </p>
      )}
    </div>
  );
};

export default ItemComments;
