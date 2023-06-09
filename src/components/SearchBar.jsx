import { useState,useEffect, useRef  } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

import Avatar from "./Avatar";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { documents, error } = useCollection("items");
  const { user } = useAuthContext();
  const searchRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (searchTerm) => {
    setSearchValue(searchTerm);
    if (searchTerm) {
      setSearchValue("");
    }
  };

  return (
    <div className="w-2/3 flex flex-col justify-center items-center md:flex-row">
      <div className="w-full flex justify-center items-center gap-2 max-w-md">
        <div className="flex gap-1 w-full relative" ref={searchRef}>
          <input
            type="text"
            className="block w-full px-10 py-2 text-red-700 bg-white border rounded-full focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Chair or Couch?..."
            value={searchValue}
            onChange={handleChange}
          />
          <button
            onClick={() => handleSearch(searchValue)}
            className="px-3 border-2 border-transparent text-red-500 bg-white rounded-full  hover:text-white hover:bg-red-500 hover:border-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/*search results container */}
          {searchValue && (
            <div className="absolute h-min z-10 top-10 left-2 mt-1 p-2 w-5/6 bg-white shadow-lg rounded-bl rounded-br max-h-36 overflow-y-auto ">
              {documents &&
                documents
                  .filter((document) => {
                    const searchTerm = searchValue.toLowerCase();
                    const title = document.title.toLowerCase();
                    // const location = document.location[0].toLowerCase();

                    return searchTerm && title.includes(searchTerm);
                  })
                  .map((document) => (
                    <Link to={`/items/${document.id}`} key={document.id}>
                      <div
                        onClick={() => handleSearch(document.title)}
                        className="cursor-pointer hover:bg-black hover:bg-opacity-10 p-2"
                      >
                        {document.title}
                      </div>
                    </Link>
                  ))}
            </div>
          )}
        </div>
      </div>
      {user && (
        <Link to={`/users/${user.uid}`}>
          <div className="w-full m-3 text-center flex justify-center items-center gap-1">
            <Avatar src={user.photoURL} />
            <p className="text-white font-bold text-sm">
              Hey, {user.displayName}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default SearchBar;
