import React from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/bg.jpg";

const Home = () => {
  return (
    <div
      className="w-full h-[calc(100vh-120px)] bg-no-repeat bg-hero bg-cover bg-center bg-fixed flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`,
      }}
    >
      <h1 className="text-white text-5xl font-bold mb-5">Chiar Issue</h1>
      <p className="text-white max-w-md md:max-w-xl px-3 mb-2">
        Welcome to Chair Issue!
      </p>
      <p className="text-white text-center px-3">
        Jump right in and explor free chairs shared by our friendly users.
      </p>
      <p className="text-white mb-5 text-center px-3">
        Feel free to share some if you have any or find any chairs for others to
        pick up!
        {/* We believe that sharing is caring, and that everyone should have access
        to functional and comfortable chair, regardless of their financial
        situation. That's why our app is completely free to use, and we
        encourage users to share information about available chairs or other
        furniture items in their local area. */}
      </p>

      <Link to="/all">
        <button className="text-white text-xl px-10 py-3 border-2 rounded-md bg-red-500 hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 ">
          View Chairs
        </button>
      </Link>
    </div>
  );
};

export default Home;
