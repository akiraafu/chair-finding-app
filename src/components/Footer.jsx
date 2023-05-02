import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className=" bg-amber-500 shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2023 🪑
            <Link to="/" className="font-bold hover:underline">
              Chair Issue
            </Link>
            . Design & Developed by{" "}
            <Link
              to="https://github.com/akiraafu"
              target="_blank"
              className="font-bold hover:underline"
            >
              Akira Fu
            </Link>
            . Built with ReactJS & 💖.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
            <li>
              <Link to="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
