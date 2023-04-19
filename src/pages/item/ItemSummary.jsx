import React from "react";

const itemSummary = ({ item }) => {
  const author = item && item.createdBy.displayName;

  return (
    <div>
      <div className="flex flex-col w-full rounded-lg shadow-md lg:max-w-sm ">
        <img
          className="object-cover w-full h-48"
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
          <p className="mb-2 leading-normal"> {item.location}</p>
          <p className="mb-2 leading-normal">
            Submitted by <strong>{author}</strong>
          </p>
          <div className="button-area">
            <button className="px-4 py-2 mr-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
              Edit
            </button>
            <button className="px-4 py-2 text-sm text-blue-100 bg-red-500 rounded shadow">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default itemSummary;
