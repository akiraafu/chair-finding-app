import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import "./navbar.css";
import Logo from "../assets/logo.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="w-full relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500 dark:bg-gray-800 shadow">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="navbar-brand text-white flex items-center cursor-pointer text-2xl font-bold mx-5"
          >
            <img src={Logo} alt="logo" className="w-32" />
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={
            "flex-col lg:flex-row lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="w-full flex flex-col justify-start items-center lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="text-sm text-center font-bold leading-relaxed inline-block mx-4 py-2 whitespace-nowrap uppercase text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/all"
                className="text-sm text-center font-bold leading-relaxed inline-block mx-4 py-2 whitespace-nowrap uppercase text-white"
                aria-current="page"
              >
                All Chairs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/create"
                className="text-sm text-center font-bold leading-relaxed inline-block mx-4 py-2 whitespace-nowrap uppercase text-white"
                aria-current="page"
              >
                Add new
              </Link>
            </li>

            {!user && (
              <>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="text-sm text-center font-bold leading-relaxed inline-block mx-4 py-2 whitespace-nowrap uppercase text-white"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signup"
                    className="text-sm text-center font-bold leading-relaxed inline-block mx-4 py-2 whitespace-nowrap uppercase text-white"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
          <SearchBar />
          {user && (
            <>
              {isPending && (
                <button className="md:w-48 inline-block text-center text-sm mx-4 px-4 pt-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 lg:mt-0">
                  Logging out
                </button>
              )}
              {!isPending && (
                <button
                  onClick={logout}
                  className="md:w-48 inline-block text-center text-sm mx-4 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 lg:mt-0"
                >
                  Log out
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
