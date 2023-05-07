import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

import moment from "moment";

const itemSummary = ({ item }) => {
  const { user } = useAuthContext();
  const { updateDocument, deleteDocument, response } = useFirestore("items");
  const navigate = useNavigate();
  const [available, setAvailable] = useState(true);

  const author = item && item.createdBy.displayName;

  const availablity = item && item.available;

  const handleClick = async () => {
    setAvailable(!available);
    await updateDocument(item.id, {
      available: available,
    });
    console.log(availablity);
    if (!response.error) {
      console.log("availablity has changed!");
    }
  };

  const handleDelete = (e) => {
    deleteDocument(item.id);
    navigate("/all");
  };

  return (
    <div className="mx-5 flex flex-col md:items-start items-center">
      <div className=" flex flex-col rounded-lg shadow-md max-w-sm lg:max-w-xl bg-gray-50">
        <div className={"w-full h-full" + (availablity ? "" : " image-box")}>
          <img
            className="object-cover object-center w-full h-full"
            src={item.imgUrl}
            alt="image"
          />
        </div>

        <div className="p-4">
          <h4 className="text-xl font-semibold tracking-tight text-blue-600">
            {item.title}
          </h4>
          <p className="text-sm text-gray-700">
            Posted&#160;{moment(item.createdAt.toDate()).fromNow()}
          </p>
          <p className="mb-2 pb-2 leading-normal border-b-2 border-gray-300 ">
            {item.details}
          </p>
          <p className="mb-2 leading-normal"> {item.location[0]}</p>
          <p className="mb-2 leading-normal">
            Submitted by&#160;
            <Link to={`/users/${item.createdBy.id}`}>
              <strong>{author}</strong>
            </Link>
          </p>
          {user && user.uid === item.createdBy.id && (
            <div className="button-area">
              <Link to={`/items/${item.id}/edit`}>
                <button className="px-4 py-2 mr-2 text-sm text-white bg-blue-500 rounded shadow">
                  Edit
                </button>
              </Link>
              <button
                onClick={handleClick}
                className="px-4 py-2 mr-2 text-sm text-white bg-amber-500 rounded shadow "
              >
                Change Availablity
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-sm text-white bg-red-500 rounded shadow"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <Link to="/all" className="mt-5 flex w-max">
        <p className="w-max py-3 underline text-red-700">View All Items</p>
      </Link>
    </div>
  );
};

export default itemSummary;
