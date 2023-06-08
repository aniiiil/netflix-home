import React from "react";
import logo from "../../Logonetflix.png";
import { Link } from "react-router-dom";
import{ImSearch} from "react-icons/im"

const Nav = () => {
  return (
    <>
      <nav className="header">
        <img src={logo} alt="logo.png" />
        <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recent">Recently Added</Link>
            <Link to="/mylist">My List</Link>
        </div>
        <ImSearch/>
      </nav>
    </>
  );
};

export default Nav;