import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-white text-gray-700 px-4 sm:px-6"
      role="alert"
      aria-live="polite"
    >
      <div className="p-6 sm:p-8 max-w-md w-full text-center">
        {/* Suggestion Links */}
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold mb-4">
          Did you mean:
        </h2>
        <div className="flex flex-wrap justify-center gap-3 text-blue-600 font-semibold mb-6">
          <Link href="/all" className="hover:underline italic">
            all
          </Link>
          <Link href="/projects" className="hover:underline italic">
            projects
          </Link>
          <Link href="/social" className="hover:underline italic">
            social
          </Link>
          <Link href="/experience" className="hover:underline italic">
            experience
          </Link>
        </div>

        {/* No Results Found */}
        <p className="text-sm sm:text-base mb-2">
          No results containing all your search terms were found.
        </p>
        <p className="text-sm sm:text-base font-medium mb-4">
          Your search did not match any documents.
        </p>

        {/* Suggestions */}
        <h3 className="text-gray-900 text-base sm:text-lg font-semibold mb-2">
          Suggestions:
        </h3>
        <ul className="text-sm sm:text-base text-left list-disc list-inside space-y-1">
          <li>Try a different keyword from the search dropdown</li>
          <li>Make sure that all words are spelled correctly</li>
          <li>Click one of the links from the suggestions or menu above</li>
        </ul>
      </div>
    </div>
  );
}
