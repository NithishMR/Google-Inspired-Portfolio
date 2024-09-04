import MultiTabs from "./MultiTabs";
import SearchBar from "./SearchBar";
function NewSearch() {
  return (
    <>
      <div className="">
        <div className="w-full p-4 border-b-[1px] border-gray-400">
          {/* Top Section with Logo, Search Bar, and Icons */}
          <div className="flex justify-between items-center mb-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="../src/assets/google_logo.svg"
                alt="Logo"
                className="h-8"
              />
              {/* <span className="text-2xl font-bold text-blue-500">Enjeck</span> */}
            </div>

            {/* Search Bar */}
            <SearchBar />

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <i className="fas fa-th"></i>
              <img
                src="../src/assets/Apps.svg"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>

          {/* Navigation Section */}
          <MultiTabs />
        </div>
      </div>
    </>
  );
}

export default NewSearch;
