import React from "react";
import "./Homescreen.css";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import requests from "../../database/Requests";

function Homescreen() {
  return (
    <div>
      {/* navigation */}
      <Nav />
      {/* banner view */}
      <Banner />
      {/* movies lists */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Mysteries" fetchUrl={requests.fetchMystery} />
    </div>
  );
}

export default Homescreen;
