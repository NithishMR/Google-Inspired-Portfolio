import Footer from "./Footer";
import SearchBar from "./SearchBar";

function FrontPage() {
  return (
    <div className="">
      <div className="w-full">
        <div className="flex flex-row items-center justify-end space-x-6 p-4">
          <div className="cursor-pointer">Gmail</div>
          <div className="cursor-pointer">Images</div>
          <div className="flex items-center space-x-4">
            <div className="cursor-pointer">another icon</div>
            <div className="cursor-pointer">Account icon</div>
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
