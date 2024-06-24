import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-slate-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="" />
          {/* <span className="ml-3 text-xl">Tailblocks</span> */}
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/signup" className="mr-5 hover:text-gray-900">
            SignUp
          </Link>
          <Link to="/signin" className="mr-5 hover:text-gray-900">
            SignIn
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link to="/blog" className="mr-5 hover:text-gray-900">
            Blog
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link to="/Suggestion" className="mr-5 hover:text-gray-900">
            Suggestion
          </Link>
        </nav>
        <form className="flex items-center" role="search">
          <input
            className="form-input mr-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success px-4 py-1 border rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
