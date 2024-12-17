import Footer from "./Footer";
import SearchBar from "./SearchBar";
import { CircleUser } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function FrontPage() {
  return (
    <div className="">
      <div className="w-full">
        <div className="flex flex-row items-center justify-end space-x-6 p-4">
          <div className="cursor-pointer text-gray-500 hover:underline">
            Gmail
          </div>
          <div className="cursor-pointer text-gray-500 hover:underline">
            Github
          </div>
          <div className="flex items-center space-x-4">
            {/* <div className="cursor-pointer">
              <img src="../src/assets/Apps.svg" alt="apps" className="w-6" />
            </div> */}

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

      <div className="mx-auto">
        <div className="logo flex justify-center items-center mt-36">
          <img
            id="google_logo"
            src="../src/assets/copy1.png"
            alt="google_logo"
            className="mx-auto"
          />
        </div>
        <SearchBar />
        <Footer />
      </div>
    </div>
  );
}

export default FrontPage;
