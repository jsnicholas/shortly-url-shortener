import React, { useRef, useState } from "react";

function App() {
  const baseURL = "https://api.shrtco.de/v2/shorten?url=";

  const get_longLink = useRef(null);

  const [getOrig, setOrig] = useState(null);
  const [getShort, setShort] = useState(null);

  async function getShortLink() {
    const title = get_longLink.current.value;

    if (title) {
      try {
        //Pass the URL that the user has entered to the API
        const shortener = await fetch(`${baseURL}${title}`);
        // If it broke, give an error
        if (!shortener.ok) {
          const message = `Uh oh! ${shortener.status} - ${shortener.statusText}`;
          throw new Error(message);
        }

        const data = await shortener.json();
        const origLink = data.result.original_link;
        const shortenedLink = data.result.short_link;

        setShort(shortenedLink);
        setOrig(origLink);
      } catch (err) {
        setOrig(err.message);
      }
    }
  }

  return (
    getShortLink && (
      <div className="flex flex-col align-center justify-center rounded-lg relative -top-8 md:top-12">
        <div className="card-body flex justify-center">
          <div className="flex flex-col md:flex-row justify-center p-4 md:p-12 w-full m-6 md:w-3/4 rounded-md bg-darkviolet linkSection">
            <input
              type="text"
              ref={get_longLink}
              className="block w-full md:w-9/12 rounded-md p-4 mb-4 md:mb-0"
              placeholder="Shorten a Link here..."
            />
            <button
              className="w-full md:ml-8 md:w-fit text-white bg-cyan rounded-md font-bold  text-lg py-2 px-8"
              onClick={getShortLink}
            >
              Shorten it!
            </button>
          </div>
        </div>
        <div className="text-lg flex justify-end rounded-md bg-white mx-40 my-8 p-8">
          <span id="originalLink" className="w-full">
            {getOrig}
          </span>
          <span id="shortLink" className="text-cyan">
            {getShort}
          </span>
          <button
            className="ml-4 text-white bg-cyan rounded-md px-8 py-2 text-sm font-bold"
            onClick={() => {
              navigator.clipboard.writeText(`${getShort}`);
            }}
          >
            Copy
          </button>
        </div>
      </div>
    )
  );
}

export default App;
