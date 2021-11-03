import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="container mx-auto font-sans">
      <div className="max-w-screen-sm mx-auto">
        <div className="py-32">
          <h1 className="font-bold text-3xl pb-5">About me 👨‍💻</h1>
          <h2 className="text-gray-500">
            A highly motivated software developer specializing in API
            development. Experienced in designing and implementing scalable
            Serverless applications, running on AWS architecture. Proficient in
            agile development practices and writing high-quality, maintainable
            code.
          </h2>
        </div>
      </div>

      <footer className="text-center py-5 text-gray-500 mt-5">
        <div className="text-xs">
          <p>&copy; {new Date().getFullYear()} Alfie Loakes</p>
        </div>
      </footer>
    </div>
  );
}
