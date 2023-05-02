import React from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/bg.jpg";

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-hero bg-cover bg-center bg-fixed flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`,
      }}
    >
      <h1 className="text-white text-5xl font-bold mb-5">Chiar Issue</h1>
      <p className="text-white max-w-xl ">Welcome to Chair Issue!</p>
      <p className="text-white max-w-xl text-center">
        Jump right in and explor free chairs shared by our friendly users.
      </p>
      <p className="text-white max-w-xl mb-5 text-center">
        Feel free to share some if you have any chairs for others to pick up or
        even just see any chairs is being available in the public!
        {/* We believe that sharing is caring, and that everyone should have access
        to functional and comfortable chair, regardless of their financial
        situation. That's why our app is completely free to use, and we
        encourage users to share information about available chairs or other
        furniture items in their local area. */}
      </p>

      <Link to="/all">
        <button className="text-white text-xl px-10 py-3 border-2 rounded-md bg-amber-500 hover:border-2 hover:border-amber-500 hover:bg-transparent hover:text-amber-500 ">
          View Chairs
        </button>
      </Link>
    </div>
  );
};

export default Home;
