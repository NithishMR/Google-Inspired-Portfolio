// import { Separator } from "@/components/ui/separator"

export default function AccountDetails() {
  return (
    <>
      <div className="flex flex-col items-center justify-around gap-y-5 ">
        <div className="flex flex-col items-center gap-3 ">
          {/* Profile Picture */}
          <div className="cursor-pointer">
            <img
              src="AshKetchum.jpeg"
              alt="profile picture"
              className="h-[100px] w-[100px] rounded-full"
            />
          </div>
          {/* Name and Email */}
          <div className="text-center">
            <div className="font-bold text-lg">Nithish M R</div>
            <div className="text-gray-500 text-sm">nithishmr004@gmail.com</div>
          </div>
          {/* Website Design Button */}
          <div className="border-gray-300 border-[1px] py-2 px-4 text-center rounded-xl shadow-md  text-sm cursor-pointer hover:bg-gray-100">
            View Another Website Design
          </div>
        </div>
        {/* More About Me Section */}
        <div className="text-center">
          <div className="text-blue-500 cursor-pointer hover:underline">
            More about me
          </div>
        </div>
        {/* GitHub Button */}
        <div className="border-gray-300 border-[1px] py-2 px-4 text-center rounded-xl shadow-md text-sm cursor-pointer hover:bg-gray-100">
          GitHub
        </div>
        {/* Footer Links */}
        <div className="text-center text-gray-600 text-sm">
          <div className="inline-block cursor-pointer hover:underline">
            View code
          </div>
          <span> • </span>
          <div className="inline-block cursor-pointer hover:underline">
            Blog & news
          </div>
        </div>
      </div>
    </>
  );
}
