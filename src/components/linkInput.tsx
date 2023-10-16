import axios from "axios";
import { useState } from "react";

const baseURL = "https://api.shrtco.de/v2/shorten?url=";

//Take the long link from user input
function LinkInput() {
  const [items, setItems] = useState<any[]>([]);
  const addItem = (itemClass: string) => setItems([...items, itemClass]);
  function copyShortLink(shortLink: string) {
    navigator.clipboard.writeText(shortLink);
  }
  const [buttonText, setButtonText] = useState("Copy Short Link");

  // method for changing copy button text
  const changeText = (buttonText: string) => {
    setButtonText(buttonText);
  };

  // fetch shortened URL via shortcode API
  // then add response to items array
  async function getShortLink(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const longURL = event.currentTarget.value;
    // request short url from user input
    try {
      await axios({
        method: "post",
        url: baseURL + longURL,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        // add the object to the list of shortened URLs
        addItem(response.data.result);
        console.log(items);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="w-full p-5">
        <div className="form-control">
          <form
            className="input-group input-group-lg text-content"
            onSubmit={getShortLink}
          >
            <input
              id="url-form"
              name="url"
              type="text"
              className="input input-bordered input-lg input-info w-full bg-primary-content text-neutral"
              placeholder="Shorten a Link here..."
            />
            <button
              className="btn btn-primary btn-lg"
              type="submit"
              onSubmit={(event: any) => getShortLink(event)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* list the shortened links */}
      {items.map(
        (item: { original_link: string; short_link: string }, index) => (
          <div key={index} className="alert text-neutral shadow-lg mt-2 mb-4">
            <a href={item.original_link}>{item.original_link}</a>
            <span>
              <a href={item.short_link}>{item.short_link}</a>
            </span>
            <button
              key={index}
              className="btn btn-primary"
              onClick={() => {
                changeText("Copied!");
                copyShortLink(item.short_link);
              }}
            >
              {buttonText}
            </button>
          </div>
        )
      )}
    </>
  );
}
export default LinkInput;
