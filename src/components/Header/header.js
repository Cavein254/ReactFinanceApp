import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <FontAwesomeIcon icon={faPodcast} size={"3x"} />
        </div>
        <div className="logotext">
          <h1>Finance Live</h1>
        </div>
        <button className="analysis">
          <a href={"https://www.tradingview.com/"}>Get Analysis</a>
        </button>
      </header>
    </div>
  );
}
