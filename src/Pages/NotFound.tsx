export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-700">
      <div className="p-6 max-w-md text-center">
        {/* Suggestion Links */}
        <h2 className="text-red-600 text-lg font-semibold mb-4">
          Did you mean:
        </h2>
        <div className="flex justify-center space-x-4 text-blue-600 font-semibold mb-6">
          <a href="/all" className="hover:underline italic">
            all
          </a>
          <a href="/projects" className="hover:underline italic">
            projects
          </a>
          <a href="/social" className="hover:underline italic">
            social
          </a>
          <a href="/images" className="hover:underline italic">
            images
          </a>
        </div>

        {/* No Results Found */}
        <p className="text-sm mb-2">
          No results containing all your search terms were found.
        </p>
        <p className="text-sm font-medium mb-4">
          Your search - <strong>nithish</strong> - did not match any documents.
        </p>

        {/* Suggestions */}
        <h3 className="text-gray-900 font-semibold mb-2">Suggestions:</h3>
        <ul className="text-sm text-left list-disc list-inside space-y-1">
          <li>Try a different keyword from the search dropdown</li>
          <li>Make sure that all words are spelled correctly</li>
          <li>Click one of the links from the suggestions or menu above</li>
        </ul>
      </div>
    </div>
  );
}
