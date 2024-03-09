import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../database/axios";
import requests from "../../database/Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);
  console.log("My movie", movie);

  function truncate(string, n) {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
      <div className="banner_content">
        <h1 className="banner_title">
          {" "}
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <p className="banner_description">
          {truncate(`${movie?.overview}`, 150)}
        </p>
        <div className="banner_buttons">
          <button className="banner_button_play">Play</button>
          <button className="banner_button_more">More Info</button>
        </div>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
