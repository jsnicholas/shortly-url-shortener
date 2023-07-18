import axios from "axios";
import { useState } from "react";

const baseURL = "https://api.shrtco.de/v2/shorten?url=";

//Take the long link from user input
function LinkInput() {
  const [items, setItems] = useState([]);
  const addItem = (itemClass) => setItems([...items, itemClass]);
  function copyShortLink(shortLink) {
    navigator.clipboard.writeText(shortLink);
  }
  const [buttonText, setButtonText] = useState("Copy Short Link");
  const changeText = (text) => setButtonText(text);

  async function getShortLink(event) {
    event.preventDefault();
    const longURL = event.target.firstChild.value;
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
              type="url"
              className="input input-bordered input-lg input-info w-full bg-primary-content text-neutral"
              placeholder="Shorten a Link here..."
            />
            <button
              className="btn btn-primary btn-lg"
              type="submit"
              onSubmit={getShortLink}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* list the shortened links */}
      {items.map((item, index) => (
        <div key={index} className="alert text-neutral shadow-lg mt-2 mb-4">
          <a href={item.original_link}>{item.original_link}</a>
          <span>
            <a href={item.short_link}>{item.short_link}</a>
          </span>
          <button
            className="btn btn-primary"
            onClick={() => {
              changeText("Copied!");
              copyShortLink(item.short_link);
            }}
          >
            {buttonText}
          </button>
        </div>
      ))}
    </>
  );
}
export default LinkInput;
