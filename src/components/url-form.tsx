import axios from "axios";
import ShortenedCard from "./shortenedCard";

const baseURL = "https://api.shrtco.de/v2/shorten?url=";

function urlForm() {
  let originalLink;
  let shortLink;
  //Take the long link from user input
  async function getShortLink() {
    const userURL = document.getElementById("url-form").value;
    try {
      await axios({
        method: "post",
        url: baseURL + userURL,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        //handle success
        console.log(response.data.result);
        let originalLink = response.data.result.original_link;
        let shortLink = response.data.result.full_short_link;
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full p-5">
      <div className="form-control">
        <div className="input-group input-group-lg">
          <input
            id="url-form"
            name="url"
            type="url"
            className="input input-bordered input-lg w-full bg-primary-content"
            placeholder="Shorten a Link here..."
          />
          <button
            className="btn btn-primary btn-lg"
            type="button"
            onClick={getShortLink}
          >
            Submit
          </button>
        </div>
      </div>
      <ShortenedCard originalLink={originalLink} shortLink={shortLink} />
    </div>
  );
}

export default urlForm;
