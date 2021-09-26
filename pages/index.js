// import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="container mx-auto font-sans">
      <nav className="flex items-center justify-between flex-wrap mx-auto p-4 max-w-screen-lg">
        <div className="flex items-center flex-no-shrink mr-6">
          <h2 className="font-bold text-2xl">Alfie Loakes</h2>
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

      <div className="max-w-screen-sm mx-auto">
        <div className="py-32">
          <h1 className="font-bold text-3xl pb-5">Hi there 👋</h1>
          <h2 className="text-gray-500">
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

      <div className="max-w-screen-sm mx-auto bg-white rounded-md mb-5">
        <div className="p-5">
          <h3 className="font-bold text-xl pb-2">
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
            ligula rhoncus, mattis velit quis, fringilla erat. Integer rhoncus
            ornare est in ullamcorper. Sed sollicitudin lacus sed purus dictum
            egestas.
          </p>

          <div className="flex items-center justify-between text-sm text-gray-400 pt-2">
            <p>September 26, 2021</p>
            <p>10 min</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-sm mx-auto bg-white rounded-md">
        <div className="p-5">
          <h3 className="font-bold text-xl pb-2">
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
            ligula rhoncus, mattis velit quis, fringilla erat. Integer rhoncus
            ornare est in ullamcorper. Sed sollicitudin lacus sed purus dictum
            egestas.
          </p>

          <div className="flex items-center justify-between text-sm text-gray-400 pt-2">
            <p>September 26, 2021</p>
            <p>10 min</p>
          </div>
        </div>
      </div>



    </div>
  );
}
