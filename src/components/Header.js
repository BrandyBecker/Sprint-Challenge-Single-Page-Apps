import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered headerThing">
      <h1 className="ui center">
        <img src="https://i.imgur.com/Pv5M5jp.png" />
        Rick &amp; Morty Fan Page
        <img src="https://i.imgur.com/vPxxH5O.png" />
      </h1>

      <nav className="navBar">
        <Link to={`/`}>Home Page</Link>
        <Link to={`/characters`}>Characters Cards</Link>
      </nav>
    </header>
  );
}
