import Media from "./Media";

describe("Media model", () => {
  let pixabay, giphy;

  const fullURL = "https://example.com/ful.jpg";
  const previewURL = "https://example.com/preview.jpg";
  beforeAll(() => {
    pixabay = {
      largeImageURL: fullURL,
      webformatHeight: 426,
      webformatWidth: 640,
      likes: 981,
      imageWidth: 6000,
      id: 3063284,
      user_id: 1564471,
      views: 632704,
      comments: 217,
      pageURL:
        "https://pixabay.com/photos/rose-flower-petal-floral-noble-3063284/",
      imageHeight: 4000,
      webformatURL:
        "https://pixabay.com/get/55e0d340485aa814f6da8c7dda79367d143dd9e054596c48702978dd9e4bc259bf_640.jpg",
      type: "photo",
      previewHeight: 99,
      tags: "rose, flower, petal",
      downloads: 407011,
      user: "annca",
      favorites: 848,
      imageSize: 3574625,
      previewWidth: 150,
      userImageURL:
        "https://cdn.pixabay.com/user/2015/11/27/06-58-54-609_250x250.jpg",
      previewURL: previewURL,
    };

    giphy = {
      type: "gif",
      id: "5UEAC8r5IRiN4YRnuG",
      slug: "epitaphrecords-music-video-5UEAC8r5IRiN4YRnuG",
      url: "https://giphy.com/gifs/epitaphrecords-music-video-5UEAC8r5IRiN4YRnuG",
      bitly_gif_url: "https://gph.is/2ruypuy",
      bitly_url: "https://gph.is/2ruypuy",
      embed_url: "https://giphy.com/embed/5UEAC8r5IRiN4YRnuG",
      username: "epitaphrecords",
      source: "https://youtu.be/G7Az4pasoVI",
      rating: "g",
      content_url: "",
      source_tld: "youtu.be",
      source_post_url: "https://youtu.be/G7Az4pasoVI",
      is_sticker: 0,
      import_datetime: "2018-05-08 23:26:42",
      trending_datetime: "0000-00-00 00:00:00",
      user: {
        avatar_url:
          "https://media3.giphy.com/avatars/epitaphrecords/b4Wg35M1daEG.gif",
        banner_url:
          "https://media3.giphy.com/headers/epitaphrecords/tE6dbmyi5kSG.gif",
        banner_image:
          "https://media3.giphy.com/headers/epitaphrecords/tE6dbmyi5kSG.gif",
        profile_url: "https://giphy.com/epitaphrecords/",
        username: "epitaphrecords",
        display_name: "Epitaph Records",
        is_verified: true,
      },
      images: {
        fixed_height_still: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/200_s.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=200_s.gif",
          width: "356",
          height: "200",
          size: "28307",
        },
        original_still: {
          url: fullURL,
          width: "480",
          height: "270",
          size: "89352",
        },
        fixed_width: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/200w.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=200w.gif",
          width: "200",
          height: "113",
          size: "177520",
          mp4: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/200w.mp4?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=200w.mp4",
          mp4_size: "70582",
          webp: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/200w.webp?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=200w.webp",
          webp_size: "83794",
        },
        fixed_height_small_still: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/100_s.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=100_s.gif",
          width: "178",
          height: "100",
          size: "10139",
        },
        fixed_height_downsampled: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/200_d.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=200_d.gif",
          width: "356",
          height: "200",
          size: "153760",
          webp: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/200_d.webp?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=200_d.webp",
          webp_size: "84662",
        },
        preview: {
          width: "192",
          height: "108",
          mp4: previewURL,
          mp4_size: "41886",
        },
        fixed_height_small: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/100.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=100.gif",
          width: "178",
          height: "100",
          size: "141571",
          mp4: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/100.mp4?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=100.mp4",
          mp4_size: "61855",
          webp: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/100.webp?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=100.webp",
          webp_size: "73316",
        },
        downsized_still: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/giphy_s.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=giphy_s.gif",
          width: "480",
          height: "270",
          size: "89352",
        },
        downsized: {
          url: fullURL,
          width: "480",
          height: "270",
          size: "1024025",
        },
        downsized_large: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/giphy.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=giphy.gif",
          width: "480",
          height: "270",
          size: "1024025",
        },
        fixed_width_small_still: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/100w_s.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=100w_s.gif",
          width: "100",
          height: "57",
          size: "3914",
        },
        preview_webp: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/giphy-preview.webp?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=giphy-preview.webp",
          width: "206",
          height: "116",
          size: "47704",
        },
        fixed_width_still: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/200w_s.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=200w_s.gif",
          width: "200",
          height: "113",
          size: "12979",
        },
        fixed_width_small: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/100w.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=100w.gif",
          width: "100",
          height: "57",
          size: "58192",
          mp4: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/100w.mp4?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=100w.mp4",
          mp4_size: "26653",
          webp: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/100w.webp?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=100w.webp",
          webp_size: "32870",
        },
        downsized_small: {
          width: "366",
          height: "206",
          mp4: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/giphy-downsized-small.mp4?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=giphy-downsized-small.mp4",
          mp4_size: "105408",
        },
        fixed_width_downsampled: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/200w_d.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=200w_d.gif",
          width: "200",
          height: "113",
          size: "57423",
          webp: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/200w_d.webp?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=200w_d.webp",
          webp_size: "34114",
        },
        downsized_medium: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/giphy.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=giphy.gif",
          width: "480",
          height: "270",
          size: "1024025",
        },
        original: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/giphy.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=giphy.gif",
          width: "480",
          height: "270",
          size: "1024025",
          frames: "19",
          mp4: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/giphy.mp4?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=giphy.mp4",
          mp4_size: "275620",
          webp: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/giphy.webp?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=giphy.webp",
          webp_size: "310992",
          hash: "a82eb5a37f33eb1af6bfbcea890267ce",
        },
        fixed_height: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/200.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=200.gif",
          width: "356",
          height: "200",
          size: "456000",
          mp4: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/200.mp4?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=200.mp4",
          mp4_size: "166978",
          webp: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/200.webp?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=200.webp",
          webp_size: "191446",
        },
        looping: {
          mp4: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/giphy-loop.mp4?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=giphy-loop.mp4",
          mp4_size: "2311731",
        },
        original_mp4: {
          width: "480",
          height: "270",
          mp4: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/giphy.mp4?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=giphy.mp4",
          mp4_size: "275620",
        },
        preview_gif: {
          url: "https://media2.giphy.com/media/5UEAC8r5IRiN4YRnuG/giphy-preview.gif?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=giphy-preview.gif",
          width: "148",
          height: "83",
          size: "49102",
        },
        "480w_still": {
          url: "https://media1.giphy.com/media/5UEAC8r5IRiN4YRnuG/480w_s.jpg?cid=344f30505d38b2ca445a6b7867b2b6d3&rid=480w_s.jpg",
          width: "480",
          height: "270",
        },
      },
      title: "music video band GIF by Epitaph Records",
      analytics: {
        onload: {
          url: "https://giphy-analytics.giphy.com/simple_analytics?response_id=5d38b2ca445a6b7867b2b6d3&event_type=GIF_SEARCH&gif_id=5UEAC8r5IRiN4YRnuG&action_type=SEEN",
        },
        onclick: {
          url: "https://giphy-analytics.giphy.com/simple_analytics?response_id=5d38b2ca445a6b7867b2b6d3&event_type=GIF_SEARCH&gif_id=5UEAC8r5IRiN4YRnuG&action_type=CLICK",
        },
        onsent: {
          url: "https://giphy-analytics.giphy.com/simple_analytics?response_id=5d38b2ca445a6b7867b2b6d3&event_type=GIF_SEARCH&gif_id=5UEAC8r5IRiN4YRnuG&action_type=SENT",
        },
      },
    };
  });

  test("allows to create from pixabay object", () => {
    const media = Media.fromPixabay(pixabay);

    expect(media.url).toBe(fullURL);
  });

  test("allows to create from giphy object", () => {
    const media = Media.fromGiphy(giphy);

    expect(media.url).toBe(fullURL);
  });
});
