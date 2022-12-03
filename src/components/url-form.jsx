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
          const message = `An error has occurred: ${shortener.status} - ${shortener.statusText}`;
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
    <div className="flex flex-col align-center justify-center rounded-lg relative top-12">
      <div className="card-body flex justify-center">
        <div className="flex justify-center p-12 w-3/4 rounded-md bg-darkviolet linkSection">
          <input
            type="text"
            ref={get_longLink}
            className="block w-5/6 rounded-md p-4 h-16"
            placeholder="Shorten a Link here..."
          />
          <button
            className="ml-8 w-1/6 text-white bg-cyan rounded-md px-8 h-16"
            onClick={getShortLink}
          >
            Shorten it!
          </button>
        </div>
      </div>
      <div
        className="text-lg flex justify-between rounded-md bg-white mx-40 my-8 p-8"
        role="alert"
      >
        <span id="originalLink" className="">
          {getOrig}
        </span>
        <span id="shortLink" className="text-cyan">
          {getShort}
        </span>
        <button
          className="ml-4 text-white bg-cyan rounded-md p-4"
          onClick={() => {
            navigator.clipboard.writeText(`${getShort}`);
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default App;
