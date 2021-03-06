import React from "react";

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap mx-auto p-4 max-w-screen-lg">
      <div className="flex items-center flex-no-shrink mr-6">
        <a href="/"><h2 className="font-bold text-2xl">Alfie Loakes</h2></a>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            className="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div className="text-sm">
          <a
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-6"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
