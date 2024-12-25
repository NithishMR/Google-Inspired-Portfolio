// import MultiTabs from "./MultiTabs";
import AccountDetails from "./AccountDetails";
import SearchBar from "./SearchBar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
function NewSearch() {
  return (
    <>
      <div className="">
        <div className="w-full p-4 border-b-[1px] border-gray-400">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img src="../src/assets/copy1.png" alt="Logo" className="h-8" />
            </div>
            <div className="ml-[-24px]">
              <SearchBar />
            </div>

            <div className="flex items-center space-x-4">
              <Popover>
                <PopoverTrigger>
                  <div className="cursor-pointer">
                    <img
                      src="AshKetchum.jpeg"
                      alt="profile picture"
                      className="h-[45px] w-[45px] rounded-full"
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-[400px]">
                  <AccountDetails />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSearch;
