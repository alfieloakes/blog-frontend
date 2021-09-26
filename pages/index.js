// import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="container mx-auto font-sans">
      <nav className="flex items-center justify-between flex-wrap mx-auto p-4 max-w-screen-lg">
        <div className="flex items-center flex-no-shrink mr-6">
          <h2 className="font-semibold text-2xl tracking-tight">Alfie Loakes</h2>
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
          <div className="text-md">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-6"
            >
              About
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-6"
            >
              Categories
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
            >
              Projects
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-screen-md mx-auto">
        <div className="py-28">
          <h1 className="font-bold text-3xl py-2">Hi there 👋</h1>
          <h2 className="text-gray-600">
            My personal blog about all things software engineering.
          </h2>
          <div className="py-6 flex">
            <div className="pr-3">
              <FontAwesomeIcon size="2x" icon={faGithub}></FontAwesomeIcon>
            </div>
            <FontAwesomeIcon size="2x" icon={faStackOverflow}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
