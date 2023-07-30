import React from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/bg.jpg";
import Video from '../../assets/video-bg.mp4'

const Home = () => {
  return (
    <div
      className="w-screen h-[calc(100vh-140px)] relative bg-black bg-opacity-50 flex flex-col justify-center items-center overflow-hidden "
     
    >
      <img src={Background} className="absolute h-full object-cover left-0 -z-10 lg:invisible" />
      <video autoPlay loop muted playsInline class="absolute w-full -z-20 hidden lg:block  " >
          <source src={Video} type="video/mp4" />
      </video>
      <h1 className="text-white text-2xl md:text-5xl font-bold mb-5">
        Chair Issue
      </h1>
      <p className="text-white max-w-md md:max-w-xl px-3 mb-2">
        Welcome to Chair Issue!
      </p>
      <p className="text-white text-center px-3">
        Jump right in and explore free chairs shared by our friendly users.
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
        <button className="text-white md:text-xl px-5 py-1 md:px-10 md:py-3 border-2 rounded-md bg-red-500 hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 ">
          View Chairs
        </button>
      </Link>
    </div>
  );
};

export default Home;
