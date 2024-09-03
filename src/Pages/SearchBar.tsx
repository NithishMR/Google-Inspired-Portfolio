import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface SandA {
  suggest: string;
  linkTo: string;
}

const SuggestAndLink: SandA[] = [
  {
    suggest: "Everything about me",
    linkTo: "/all",
  },
  {
    suggest: "About me",
    linkTo: "/aboutMe",
  },
  {
    suggest: "Projects",
    linkTo: "/projects",
  },
  {
    suggest: "Images",
    linkTo: "/images",
  },
  {
    suggest: "Social",
    linkTo: "/social",
  },
];

function SearchBar() {
  const [isSuggestionVisible, setIsSuggestionVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const showSuggestions = () => {
    setIsSuggestionVisible(!isSuggestionVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setIsSuggestionVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className="search-container mt-8">
      <div className="search-area flex justify-center items-center">
        <label htmlFor="search-about-me" className="flex items-center">
          <button
            id="search-button"
            type="button"
            onClick={showSuggestions}
            className="h-10 w-10 bg-transparent border border-gray-500 border-r-0 rounded-l-md"
          >
            <img
              id="search-icon"
              src="../src/assets/search.svg"
              alt="search"
              className="h-7 ml-1.5"
            />
          </button>
          <input
            type="text"
            id="search-about-me"
            className={`h-10 min-w-[520px] border border-gray-500 rounded-r-md focus:outline-none focus:pl-5 ${
              isSuggestionVisible ? "rounded-r-none" : ""
            }`}
            onClick={showSuggestions}
          />
        </label>
      </div>
      <div
        className={`suggestion-container ${
          isSuggestionVisible ? "block" : "hidden"
        } mx-auto text-start w-[560px] border border-gray-500 mt-5`}
      >
        <div className="suggestions mt-2 mr-12">
          {SuggestAndLink.map((item, index) => (
            <div
              key={index}
              className="element-container flex items-center py-2"
            >
              <img
                className="history-image mr-4 ml-1"
                src="../src/assets/history.svg"
                alt="history"
              />
              <p className="elements">
                <Link to={item.linkTo} className="text-blue-500 no-underline">
                  {item.suggest}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
