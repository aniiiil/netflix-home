import React from "react";
import "./Home.scss";
import axios from "axios";

const apiKey="fe2c1ac7b45875ea5add1a375ec18cbe"
const Card = ({ img }) => <img className="card" src={img} alt="cover" />;
const Row = ({
  title,
  arr = [
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
    },
  ],
}) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item) => (
        <Card img={item.img} />
      ))}
    </div>
  </div>
);
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="banner"></div>
        <Row title={"Popular on Netflix"} />
        <Row title={"Recent Launch"} />
        <Row title={"Action Movies"} />
        <Row title={"Si-fi Movies"} />
      </section>
    </>
  );
};

export default Home;
