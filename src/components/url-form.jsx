import React, { useRef, useState } from "react";

function App() {
  const baseURL = "https://api.shrtco.de/v2/shorten?url=";

  const get_longLink = useRef(null);

  const [getResult, setGetResult] = useState(null);

  const formatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function getShortLink() {
    const title = get_longLink.current.value;

    if (title) {
      try {
        const res = await fetch(`${baseURL}${title}`);

        if (!res.ok) {
          const message = `An error has occurred: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        const result = {
          ShortLink: data.result.short_link,
        };

        setGetResult(formatResponse(result));
      } catch (err) {
        setGetResult(err.message);
      }
    }
  }

  return (
    <div className="rounded-lg">
      <div className="card-body flex justify-center">
        <div className="flex justify-center p-8 w-3/4 rounded-md bg-darkviolet linkSection">
          <input
            type="text"
            ref={get_longLink}
            className="input-lg rounded-md p-4"
            placeholder="Shorten a Link here..."
          />
          {/*    <div className="input-group-append"> */}
          <button
            className="ml-4 text-white bg-cyan rounded-md p-4"
            onClick={getShortLink}
          >
            Shorten it!
          </button>
        </div>
      </div>

      {getResult && (
        <div className="flex justify-center" role="alert">
          <pre>{getResult}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
