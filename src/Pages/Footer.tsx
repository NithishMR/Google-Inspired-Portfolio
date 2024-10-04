import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-40 w-full">
      <div className="text-left text-gray-700 text-xl border-b-2 border-gray-400 pb-2">
        <div className="pl-6">Chennai</div>
      </div>
      <div className="mt-4 text-xl">
        <div className="flex flex-col md:flex-row justify-between ml-1">
          <ul className="flex flex-row w-full md:w-[300px] justify-around mb-4 md:mb-0">
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 font-semibold transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-gray-700 hover:text-gray-900 font-semibold transition duration-200"
              >
                Projects
              </Link>
            </li>
            <li className="text-gray-700 hover:text-gray-900 font-semibold transition duration-200">
              Blog
            </li>
          </ul>
          <ul className="flex flex-row w-full md:w-[300px] justify-around">
            <li>
              <a
                href="https://github.com/NithishMR/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 font-semibold transition duration-200"
              >
                Github
              </a>
            </li>
            <li className="text-gray-700 hover:text-gray-900 font-semibold transition duration-200">
              <a href="mailto:nithishmr004@gmail.com">Email</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nithishmr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 font-semibold transition duration-200"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
