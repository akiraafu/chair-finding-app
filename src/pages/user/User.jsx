import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

import { useDocument } from "../../hooks/useDocument";

import Avatar from "../../components/Avatar";
import { useEffect } from "react";

const User = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("items");

  useEffect(() => {
    const userItems = [];
    const authorId = documents && documents.map((d) => d.createdBy.id);
    const userId = user && user.uid;

    if (authorId === userId) {
    }

    console.log(authorId, userId);
  }, [documents]);

  return (
    <div className="w-full h-[calc(100vh-140px)]">
      {error && <p className="error">{error}</p>}

      <div className="w-full my-3 user flex flex-col justify-center items-center gap-1">
        <Avatar src={user.photoURL} />
        <p className="font-bold text-sm">{user.displayName}</p>
      </div>
    </div>
  );
};

export default User;
