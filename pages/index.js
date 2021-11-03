import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="container mx-auto font-sans">
      <div className="max-w-screen-sm mx-auto">
        <div className="py-32">
          <h1 className="font-bold text-3xl pb-5">Hi there 👋</h1>
          <h2 className="text-gray-500">
            My personal blog about all things software engineering.
          </h2>
          <div className="py-6 flex">
            <div className="pr-3">
              <a href="https://github.com/alfieloakes">
                <FontAwesomeIcon size="2x" icon={faGithub}></FontAwesomeIcon>
              </a>
            </div>
            <a href="https://www.linkedin.com/in/alfieloakes">
              <FontAwesomeIcon size="2x" icon={faLinkedin}></FontAwesomeIcon>
            </a>
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
