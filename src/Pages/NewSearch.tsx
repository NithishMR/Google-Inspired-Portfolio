// import MultiTabs from "./MultiTabs";
import SearchBar from "./SearchBar";
import { CircleUser } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="cursor-pointer">
                      <CircleUser color="gray" size={28} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex flex-col items-center justify-center">
                      <div className="">Nithish MR</div>
                      <div className="">nithishmr004@gmail.com</div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSearch;
