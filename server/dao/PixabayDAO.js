import axios from "axios";
import Media from "../model/Media";

export default class PixabayDAO {
  constructor(apiKey, baseUri = "https://pixabay.com/api/") {
    this._apiKey = apiKey;
    this._baseUri = baseUri;
  }
  async search(searchTerm) {
    try {
      const result = [];
      let res = await axios.get(this._baseUri, {
        params: {
          q: searchTerm,
          key: this._apiKey,
        },
      });

      res.data.hits.forEach((element) => {
        result.push(Media.fromPixabay(element));
      });

      return result;
    } catch (e) {
      console.warn(e);
    }
  }
}
