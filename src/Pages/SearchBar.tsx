import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  MouseEvent,
} from "react";
import { Link, useNavigate } from "react-router-dom";

interface SandA {
  suggest: string;
  linkTo: string;
}

const SuggestAndLink1: SandA[] = [
  { suggest: "About me", linkTo: "/all" },
  { suggest: "Projects", linkTo: "/projects" },
  { suggest: "Images", linkTo: "/images" },
  { suggest: "Social", linkTo: "/social" },
  { suggest: "Experience", linkTo: "/experience" },
];

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestAndLink, setSuggestAndLink] =
    useState<SandA[]>(SuggestAndLink1);
  const [isSuggestionVisible, setIsSuggestionVisible] =
    useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const showSuggestions = () => {
    setIsSuggestionVisible(!isSuggestionVisible);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default behavior (e.g., form submission)
      console.log("Enter key pressed");
      if (inputValue) {
        navigate(`/${inputValue}`);
      }
    }
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
    // Use type assertion to specify the type of the event
    const handleClickOutsideTyped = (event: Event) =>
      handleClickOutside(event as unknown as MouseEvent);

    document.addEventListener(
      "mousedown",
      handleClickOutsideTyped as EventListener
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutsideTyped as EventListener
      );
    };
  }, []);

  // const addElement = (element: SandA) => {
  //   setSuggestAndLink((prev) => [...prev, element]);
  // };

  const removeElement = (index: number) => {
    setSuggestAndLink((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div ref={searchRef} className="search-container items-center">
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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
        </label>
      </div>
      <div
        className={`border-custom suggestion-container ${
          isSuggestionVisible && suggestAndLink.length > 0 ? "block" : "hidden"
        } mx-auto text-start w-[560px] border border-gray-500 mt-5 p-2`}
      >
        <div className="suggestions my-2">
          {suggestAndLink.map((item, index) => (
            <div className="hover:bg-[#f3f1f1] rounded-md">
              <div
                key={index}
                className="flex flex-row justify-between items-center  mx-4 "
              >
                <div className="element-container flex items-center py-2">
                  <img
                    className="history-image mr-4 ml-1"
                    src="../src/assets/history.svg"
                    alt="history"
                  />
                  <p className="elements">
                    <Link
                      to={item.linkTo}
                      className="text-blue-500 no-underline"
                    >
                      {item.suggest}
                    </Link>
                  </p>
                </div>
                <div>
                  <div className="flex flex-row items-center justify-between hover:text-blue-600">
                    <button type="button" onClick={() => removeElement(index)}>
                      Remove
                      <img
                        className="inline-block"
                        src="../src/assets/close.svg"
                        alt="close button"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
