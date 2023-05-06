import { useParams } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { useDocument } from "../../hooks/useDocument";

import Avatar from "../../components/Avatar";
import ItemList from "../../components/ItemList";

const User = () => {
  const { id } = useParams();
  const { document } = useDocument("users", id);
  const { documents, error } = useCollection("items");

  let userItems = null;
  if (documents) {
    userItems = documents.filter((d) => d.createdBy.id === id);
  }

  return (
    <div className="w-full h-[calc(100vh-140px)]">
      {error && <p className="error">{error}</p>}

      {document && (
        <div className="mx-3 h-full">
          <div className="userPage w-full my-3 flex flex-col justify-center items-center gap-1">
            <Avatar src={document.photoURL} />
            <p className="font-bold text-xl">
              <span>Items posted by:&#160;</span>
              {document.displayName}
            </p>
          </div>
          <div className="h-2/3 max-h-full overflow-y-scroll scrollbar-hide flex flex-col items-center">
            {userItems && <ItemList items={userItems} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
