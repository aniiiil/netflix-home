import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const apiKey = "fe2c1ac7b45875ea5add1a375ec18cbe";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;
const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);
const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [playingMovies, setPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };
    const fetchPlayingMovie = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setPlayingMovies(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    };
    const fetchTopRatedMovie = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };

    const getAllGenere = async () => {
      //https://api.themoviedb.org/3/genre/movie/list?api_key=fe2c1ac7b45875ea5add1a375ec18cbe&language=en-US
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
    };

    getAllGenere();
    fetchUpcoming();
    fetchPlayingMovie();
    fetchPopular();
    fetchTopRatedMovie();
  }, []);

  return (
    <>
      <section className="home">
        <div
          className="banner"
          style={{
            backgroundImage: popularMovies[3]
              ? `url(${`${imgUrl}/${popularMovies[3].poster_path}`})`
              : "none",
          }}
        >
          {popularMovies[3] && <h1>{popularMovies[3].original_title} </h1>}
          {popularMovies[3] && <p>{popularMovies[3].overview}</p>}

          <div>
            <button>
              <BiPlay />
              Play
            </button>
            <button>
              My List
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <Row title={"Upcomings "} arr={upcomingMovies} />
        <Row title={"Top Rated "} arr={topRatedMovies} />
        <Row title={"Popular "} arr={popularMovies} />
        <Row title={"Now Playing "} arr={playingMovies} />

        <div className="genreBox">
          {genre.map((item) => (
            <Link key={item.id} to={`/genre/${item.id}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
