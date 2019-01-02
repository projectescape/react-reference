import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 950ffbd4f0e843eff45ebc782cbb76e841f1494a205ce1694ed04499e9b820d3"
  }
});
