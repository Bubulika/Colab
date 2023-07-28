import "./Header.css";
import { useState } from "react";
import triangle from "./triangle.png";
import burger from "./burger.jpg";
import X from "./x.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <header>
      <div className="header-flex">
        <div className="header-h2">
          <img src={triangle} alt="triangle"></img>
          <Link to="/" className="link-line">
            <h2 className="header-header">PHOTOSNAP</h2>
          </Link>
        </div>
        <img
          className="navbar-icon"
          onClick={() => setIsVisible(!isVisible)}
          src={isVisible ? X : burger}
          alt={isVisible ? "X" : "burger"}
        ></img>
      </div>

      <div className={isVisible ? "menu visible" : "menu"}>
        <ul className="header-ul">
          <Link className="link-line" to="/stories">
            <li>STORIES</li>
          </Link>
          <Link className="link-line" to="/features">
            <li>FEATURES</li>
          </Link>
          <Link className="link-line" to="/pricing">
            <li>PRICING</li>
          </Link>
        </ul>
        <div className="visibility">
          <div className="header-line"></div>
          <div className="header-get-invite">GET AN INVITE</div>
        </div>
      </div>

      <div className="header-flex-tablet">
        <div className="header-h2">
          <img src={triangle} alt="triangle"></img>
          <Link className="link-line" to="/">
            <h2 className="header-header1">PHOTOSNAP</h2>
          </Link>
        </div>
        <ul className="header-ul-tablet">
          <Link className="link-line" to="/stories">
            <li>STORIES</li>
          </Link>
          <Link className="link-line" to="/features">
            <li>FEATURES</li>
          </Link>
          <Link className="link-line" to="/pricing">
            <li>PRICING</li>
          </Link>
        </ul>
        <div className="header-get-invite-tablet">GET AN INVITE</div>
      </div>
    </header>
  );
}
