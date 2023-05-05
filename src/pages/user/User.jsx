import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

import { useDocument } from "../../hooks/useDocument";

import Avatar from "../../components/Avatar";
import { useEffect } from "react";

const User = () => {
  const { id } = useParams();
  const { document, error } = useDocument("users", id);

  console.log(id);
  console.log(document && document.displayName);

  // const { user } = useAuthContext();
  // const { documents, error } = useCollection("items");

  // useEffect(() => {
  //   const userItems = [];
  //   const authorId = documents && documents.map((d) => d.createdBy.id);
  //   const userId = user && user.uid;

  //   if (authorId === userId) {
  //   }

  //   console.log(authorId, userId);
  // }, [documents]);

  return (
    <div className="w-full h-[calc(100vh-140px)]">
      {error && <p className="error">{error}</p>}

      {document && (
        <div className="w-full my-3 user flex flex-col justify-center items-center gap-1">
          <Avatar src={document.photoURL} />
          <p className="font-bold text-sm">{document.displayName}</p>
        </div>
      )}
    </div>
  );
};

export default User;
