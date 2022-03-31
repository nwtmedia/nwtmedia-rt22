export default class Media {
  constructor(URL) {
    this.url = URL;
  }

  static fromPixabay(pixabayObj) {
    const { largeImageURL } = pixabayObj;

    return new this(largeImageURL);
  }

  static fromGiphy(giphyObj) {
    const URL = giphyObj.images.downsized.url;

    return new this(URL);
  }
}
