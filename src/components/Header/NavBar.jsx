import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/logo.png";
import { AuthContext } from "../../context/AuthProvider";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.photoURL);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Success");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <nav className="bg-gray-100 mx-auto w-full fixed top-0 z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <Link
            rel="noopener noreferrer"
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-2 "
          >
            {/* website logo and name */}
            <img className="h-8" src={logo} alt="Logo" />
            <span className="ml-2 text-2xl font-bold">Online School</span>
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              {/* Nav link */}
              <Link
                rel="noopener noreferrer"
                to="/home"
                className="flex items-center px-4 font-semibold hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/courses"
                className="flex items-center px-4 font-semibold hover:text-blue-400"
              >
                Courses
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/faq"
                className="flex items-center px-4 font-semibold hover:text-blue-400 rounded-lg hover:text-blue-400"
              >
                FaQ
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="blog"
                className="flex items-center px-4 font-semibold hover:text-blue-400"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {user?.uid ? (
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {user?.photoURL ? (
              <Link to="#">
                <img
                  className="h-8 rounded-lg"
                  src={user?.photoURL}
                  alt="#"
                  title={user.displayName}
                />
              </Link>
            ) : (
              <UserCircleIcon className="h-8 " />
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="items-center flex-shrink-0 hidden lg:flex"
          >
            <button className="px-8  font-semibold rounded bg-blue-400 text-white btn-sm">
              Log in
            </button>
          </Link>
        )}

        {user?.uid && (
          <Link
            onClick={handleLogOut}
            to=""
            className="items-center flex-shrink-0 hidden lg:flex"
          >
            <button className="px-8  font-semibold rounded bg-blue-400 text-white btn-sm">
              Log out
            </button>
          </Link>
        )}

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <label
            htmlFor="Toggle1"
            className="inline-flex items-center space-x-4 cursor-pointer "
          >
            <span className="font-semibold">Light</span>
            <span className="relative">
              <input id="Toggle1" type="checkbox" className="hidden peer" />
              <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:dark:bg-violet-400"></div>
              <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
            </span>
            <span className="font-semibold">Dark</span>
          </label>
        </div>

        <div className="p-4 lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <img className="h-8" src={logo} alt="Logo" />
                      <span className="ml-2 text-2xl font-bold">
                        Online School
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li className="flex">
                      <Link
                        rel="noopener noreferrer"
                        to="/home"
                        className="flex items-center px-4 font-semibold hover:text-blue-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="flex">
                      <Link
                        rel="noopener noreferrer"
                        to="/courses"
                        className="flex items-center px-4 font-semibold hover:text-blue-400"
                      >
                        Courses
                      </Link>
                    </li>
                    <li className="flex">
                      <Link
                        rel="noopener noreferrer"
                        to="/faq"
                        className="flex items-center px-4 font-semibold hover:text-blue-400"
                      >
                       FaQ
                      </Link>
                    </li>
                    <li className="flex">
                      <Link
                        rel="noopener noreferrer"
                        to="blog"
                        className="flex items-center px-4 font-semibold hover:text-blue-400"
                      >
                        Blog
                      </Link>
                    </li>

                    <li className="flex">
                      {user?.uid ? (
                        <div>
                          {user?.photoURL ? (
                          
                            <Link to="#">
                              <img
                                className="h-8 rounded-lg mx-3"
                                src={user?.photoURL}
                                alt="#"
                                title={user.displayName}
                              />
                            </Link>
                          ) : (
                            <UserCircleIcon className="h-8 " />
                          )}
                        </div>
                      ) : (
                        <Link to="/login" className="">
                          <button className="px-8  font-semibold rounded bg-blue-400 text-white btn-sm">
                            Log in
                          </button>
                        </Link>
                      )}
                    </li>

                    <li className="flex">
                      {user?.uid && (
                        <Link onClick={handleLogOut} to="" className="">
                          <button className="px-8  font-semibold rounded bg-blue-400 text-white btn-sm">
                            Log out
                          </button>
                        </Link>
                      )}
                    </li>

                    <li className="flex mx-3">
                      <label
                        htmlFor="Toggle2"
                        className="inline-flex items-center space-x-4 cursor-pointer "
                      >
                        <span className="font-semibold">Light</span>
                        <span className="relative">
                          <input
                            id="Toggle2"
                            type="checkbox"
                            className="hidden peer"
                          />
                          <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                          <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                        </span>
                        <span className="font-semibold">Dark</span>
                      </label>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
