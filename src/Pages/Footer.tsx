import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-40 pb-5 w-full">
      <div className="text-left text-gray-700 ml-4 text-xl border-b-2 border-b-black-400">
        Chennai
      </div>
      <div className=" mt-4 text-xl">
        <div className="flex flex-row  justify-between ml-1">
          <ul className=" flex flex-row w-[300px] justify-around">
            <Link to={"/about"}>
              <li className="text-gray-700 hover:text-gray-900">About</li>
            </Link>
            <Link to={"/projects"}>
              <li className="text-gray-700 hover:text-gray-900">Projects</li>
            </Link>
            <li className="text-gray-700 hover:text-gray-900">Blog</li>
          </ul>
          <ul className="flex flex-row w-[300px] justify-around ">
            <Link to={"https://github.com/NithishMR/"}>
              <li className="text-gray-700 hover:text-gray-900">Github</li>
            </Link>
            <li className="text-gray-700 hover:text-gray-900">Email</li>
            <Link to={"https://www.linkedin.com/in/nithishmr/"}>
              <li className="text-gray-700 hover:text-gray-900">LinkedIn</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
