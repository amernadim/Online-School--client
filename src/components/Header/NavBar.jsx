import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100 w-11/12 mx-auto">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <Link
            rel="noopener noreferrer"
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-2 "
          >
            <img className="h-8" src={logo} alt="Logo" />
            <span className="ml-2 text-2xl font-bold">Online School</span>
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
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
                className="flex items-center px-4 font-semibold hover:text-blue-400 rounded-lg hover:text-blue-400"
              >
                Faq
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

        <Link to="/login" className="items-center flex-shrink-0 hidden lg:flex">
          <button className="px-8  font-semibold rounded bg-blue-400 text-gray-900 btn-sm">
            Log in
          </button>
        </Link>

        <Link to="#" className="items-center flex-shrink-0 hidden lg:flex">
          <img className="h-8 rounded-lg" src={logo} alt="" title="Name" />
        </Link>

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
                        Faq
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
                      <Link
                       rel="noopener noreferrer"
                        to="/login"
                        className="items-center"
                      >
                        <button className="px-8  font-semibold rounded bg-blue-400 text-gray-900 btn-sm">
                          Log in
                        </button>
                        
                      </Link>
                     
                    </li>

                    <li className="flex">
                      <Link
                       rel="noopener noreferrer"
                        to="/home"
                        className="items-center"
                      >
                        <img
                          className="h-8 rounded-lg"
                          src={logo}
                          alt=""
                          title="Name"
                        />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
