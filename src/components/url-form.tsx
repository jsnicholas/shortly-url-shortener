import axios from "axios";

const baseURL = "https://api.shrtco.de/v2/shorten?url=";
function App() {
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
        console.log(response);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col align-center justify-center rounded-lg relative -top-8 md:top-1">
      <div className="card-body flex justify-center">
        <div className="flex flex-col md:flex-row justify-center p-4 md:p-12 w-3/4 m-6 md:w-3/4 rounded-md bg-darkviolet linkSection">
          <form method="post">
            <input
              id="url-form"
              name="url"
              type="url"
              className="block w-full md:w-11/12 rounded-md p-4 mb-4 md:mb-0"
              placeholder="Shorten a Link here..."
            />
            <button type="button" onClick={getShortLink}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div id="urlInfo" className="hidden">
        <span id="originalLink" className="block md:w-full">
          {/* {getOrig} */}
        </span>
        <span id="shortLink" className="block text-cyan">
          {/* {getShort} */}
        </span>
      </div>
    </div>
  );
}

export default App;
