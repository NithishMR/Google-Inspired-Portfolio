function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-40 pb-5 w-full">
      <div className="text-left text-gray-700 ml-4 text-xl border-b-2 border-b-black-400">
        Chennai
      </div>
      <div className=" mt-4 text-xl">
        <div className="flex flex-row  justify-between ml-1">
          <ul className=" flex flex-row w-[300px] justify-around">
            <li className="text-gray-700 hover:text-gray-900">About</li>
            <li className="text-gray-700 hover:text-gray-900">Projects</li>
            <li className="text-gray-700 hover:text-gray-900">Blog</li>
          </ul>
          <ul className="flex flex-row w-[300px] justify-around ">
            <li className="text-gray-700 hover:text-gray-900">Github</li>
            <li className="text-gray-700 hover:text-gray-900">Email</li>
            <li className="text-gray-700 hover:text-gray-900">LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
