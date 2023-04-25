import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import Avatar from "../../components/Avatar";

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
    <div className="item-comments">
      <h4>Item Comments</h4>
      <ul>
        {item.comments.length === 0 && (
          <p className="text-gray-400">No comments yet</p>
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
          <button className="button">Add Comment</button>
        </form>
      )}
      {!user && <p>Login or Signup to comment</p>}
    </div>
  );
};

export default ItemComments;
