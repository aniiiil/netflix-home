import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";

const apiKey="fe2c1ac7b45875ea5add1a375ec18cbe";
const url="https://api.themoviedb.org/3";
const imgUrl="https://image.tmdb.org/t/p/original";
const upcoming="upcoming";
const nowPlaying="now_playing";
const popular= "popular";
const topRated= "top_rated";



const Card = ({ img }) => <img className="card" src={img} alt="cover" />;
const Row = ({ title, arr = []}) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item,index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);
const Home = () => {

  const[upcomingMovies ,setUpcomingMovies]= useState([]);
  const[playingMovies ,setPlayingMovies]= useState([]);
  const[popularMovies ,setPopularMovies]= useState([]);
  const[topRatedMovies ,setTopRatedMovies]= useState([]);

useEffect(()=>{

const fetchUpcoming= async()=>{
const{data:{results}}= await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
setUpcomingMovies(results);

};
const fetchPlayingMovie= async()=>{
  const{data:{results}}= await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
  setPlayingMovies(results);
  };
const fetchPopular= async()=>{
  const{data:{results}}= await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
  setPopularMovies(results);
  };
  const fetchTopRatedMovie= async()=>{
    const{data:{results}}= await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
    setTopRatedMovies(results);
    };
fetchUpcoming();
fetchPlayingMovie();
fetchPopular();
fetchTopRatedMovie();

},[])

  return (
    <>
      <section className="home">
        <div className="banner"></div>
        <Row title={"Upcomings Movies"} arr={upcomingMovies} />
        <Row title={"Top Rated Movies"} arr={topRatedMovies} />
        <Row title={"Popular Movies"} arr={popularMovies} />
        <Row title={"Now Playing Movies"} arr={playingMovies} />
      
      </section>
    </>
  );
};

export default Home;
