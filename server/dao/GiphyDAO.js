import axios from "axios";
import Media from "../model/Media";

export default class GiphyDAO {
  constructor(apiKey, baseUri = "https://api.giphy.com/v1/gifs/search") {
    this._apiKey = apiKey;
    this._baseUri = baseUri;
  }

  async search(searchTerm) {
    try {
      const result = [];
      let res = await axios.get(this._baseUri, {
        params: {
          q: searchTerm,
          api_key: this._apiKey,
        },
      });

      res.data.data.forEach((element) => {
        result.push(Media.fromGiphy(element));
      });

      return result;
    } catch (e) {
      console.warn(e);
    }
  }
}
