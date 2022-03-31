require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

import PixabayDAO from "./dao/PixabayDAO";
import GiphyDAO from "./dao/GiphyDAO";

app.use(cors());
app.use(express.static("dist"));

app.get("/api", async (req, res) => {
  let medias = [];
  const searchTerm = req.query.s || "";

  const pixabaySource = new PixabayDAO(process.env.PIXABAY_API_KEY);
  const giphySource = new GiphyDAO(process.env.GIPHY_API_KEY);

  medias = medias.concat(await giphySource.search(searchTerm));
  medias = medias.concat(await pixabaySource.search(searchTerm));

  res.json(medias);
});

app.use("*", (req, res) => res.status(404).send("Not found"));

app.listen(port, () => console.log(`app listening on port ${port}!`));
