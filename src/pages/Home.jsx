import React from "react";
import Header from "../components/Header";
import Categories from "../data/Categories.json";
import "../styles/pages/Home.scss";
import { Link } from "@reach/router";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-screen">
        <ul>
          {Categories.map((item, index) => (
            <li key={index}>
              <Link to={`/quiz/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
