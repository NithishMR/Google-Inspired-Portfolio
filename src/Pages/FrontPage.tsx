import Footer from "./Footer";
import SearchBar from "./SearchBar";

function FrontPage() {
  return (
    <div className="">
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
