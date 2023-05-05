import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const itemSummary = ({ item }) => {
  const { user } = useAuthContext();
  const author = item && item.createdBy.displayName;

  const handleClick = () => {
    alert("checked!");
  };

  return (
    <div className="mx-5">
      <div className="flex flex-col rounded-lg shadow-md max-w-sm lg:max-w-xl bg-gray-50">
        <img
          className="object-cover object-center w-full h-full"
          src={item.imgUrl}
          alt="image"
        />

        <div className="p-4">
          <h4 className="text-xl font-semibold tracking-tight text-blue-600">
            {item.title}
          </h4>
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
          {user.uid === item.createdBy.id && (
            <div className="button-area">
              <Link to={`/items/${item.id}/edit`}>
                <button className="px-4 py-2 mr-2 text-sm text-white bg-blue-500 rounded shadow">
                  Edit
                </button>
              </Link>
              <button
                onClick={handleClick}
                className="px-4 py-2 text-sm text-white bg-red-500 rounded shadow"
              >
                Mark as Unavailable
              </button>
            </div>
          )}
        </div>
      </div>

      <Link to="/all">
        <p className="py-3 underline text-amber-700">View All Items</p>
      </Link>
    </div>
  );
};

export default itemSummary;
