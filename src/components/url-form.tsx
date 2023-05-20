import axios from "axios";
import { g } from "gelerator";

const baseURL = "https://api.shrtco.de/v2/shorten?url=";

function urlForm() {
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
        const linkBox = document.querySelector("#linkBox");
        const originalLink = JSON.stringify(response.data.result.original_link);
        const shortLink = JSON.stringify(response.data.result.full_short_link);
        function copyShortLink() {
          navigator.clipboard.writeText(shortLink.replace(/"/g, ""));
        }
        function makeLinkBox() {
          const newEl = g("div.alert.alert-info.shadow-lg.mt-2")(
            `<a href=${originalLink}>${originalLink.replace(/"/g, "")}</a>`
          );
          const newEl2 = g("span")(
            `<a href=${shortLink}>${shortLink.replace(/"/g, "")}</a>`
          );
          const copyButton = g("button.btn-primary", {
            onclick: copyShortLink(),
          })(`Copy Short Link`);
          linkBox.appendChild(newEl);
          newEl.appendChild(newEl2);
          newEl.appendChild(copyButton);
        }
        makeLinkBox();
        console.log(response.data.result.original_link);
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
      <div id="linkBox"></div>
    </div>
  );
}

export default urlForm;
