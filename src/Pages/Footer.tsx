import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-40 w-full">
      <div className="text-center text-gray-700 text-lg font-bold border-b-2 border-gray-300 pb-4">
        <div className="uppercase tracking-widest">India</div>
      </div>
      <div className="mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mx-6">
          {/* Left section */}
          <ul className="flex flex-col md:flex-row items-center md:w-[300px] justify-around space-y-4 md:space-y-0">
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
            <li>
              <a
                href="#blog"
                className="text-gray-700 hover:text-gray-900 font-semibold transition duration-200"
              >
                Blog
              </a>
            </li>
          </ul>

          {/* Right section */}
          <ul className="flex flex-col md:flex-row items-center md:w-[300px] justify-around space-y-4 md:space-y-0">
            <li>
              <a
                href="https://github.com/NithishMR/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 font-semibold transition duration-200"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:nithishmr004@gmail.com"
                className="text-gray-700 hover:text-gray-900 font-semibold transition duration-200"
              >
                Email
              </a>
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
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NithishMR. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
