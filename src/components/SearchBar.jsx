import "./searchBar.css";
import { useAuthContext } from "../hooks/useAuthContext";
import Avatar from "./Avatar";

const SearchBar = () => {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-5">
      <div className="flex justify-center items-center max-w-md">
        <div className="flex space-x-1 w-full">
          <input
            type="text"
            className="block w-full px-10 py-2 text-red-700 bg-white border rounded-full focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button className="px-3 text-red-500 bg-white rounded-full ">
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
        </div>
      </div>
      {user && (
        <div className="user flex justify-center items-center gap-2">
          <Avatar src={user.photoURL} />
          <p className="text-white font-bold text-sm">
            Hey, {user.displayName}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
