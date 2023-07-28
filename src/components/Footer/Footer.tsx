import triangle from "./triangle.png";
import twitter from "../../assets/shared/desktop/twitter.svg";
import pinterest from "../../assets/shared/desktop/pinterest.svg";
import facebook from "../../assets/shared/desktop/facebook.svg";
import facebook1 from "./facebook.png";
import pinterest1 from "./pinterest.png";
import twitter1 from "./twitter.png";
import inst1 from "./instagram.png";
import youtube1 from "./youtube.png";
import inst from "../../assets/shared/desktop/instagram.svg";
import youtube from "../../assets/shared/desktop/youtube.svg";
import line from "./line.png";
import arrow from "./arrow.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  return (
    <>
      <div className="footer">
        <div className="footer-div">
          <img src={triangle} alt="icon"></img>
          <h2>PHOTOSNAP</h2>
        </div>
        <div className="icon-div">
          <img
            onMouseOver={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
            src={hover ? facebook : facebook1}
            alt="icon"
          ></img>
          <img
            onMouseOver={() => setHover2(!hover2)}
            onMouseLeave={() => setHover2(!hover2)}
            src={hover2 ? youtube : youtube1}
            alt="icon"
          ></img>
          <img
            onMouseOver={() => setHover3(!hover3)}
            onMouseLeave={() => setHover3(!hover3)}
            src={hover3 ? twitter : twitter1}
            alt="icon"
          ></img>
          <img
            onMouseOver={() => setHover4(!hover4)}
            onMouseLeave={() => setHover4(!hover4)}
            src={hover4 ? pinterest : pinterest1}
            alt="icon"
          ></img>
          <img
            onMouseOver={() => setHover5(!hover5)}
            onMouseLeave={() => setHover5(!hover5)}
            src={hover5 ? inst : inst1}
            alt="icon"
          ></img>
        </div>
        <ul>
          <li>
            <Link className="link-line" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="link-line" to="/stories">
              STORIES
            </Link>
          </li>
          <li>
            <Link className="link-line" to="/features">
              FEATURES
            </Link>
          </li>
          <li>
            <Link className="link-line" to="/pricing">
              PRICING
            </Link>
          </li>
        </ul>
        <div className="get-invite">
          <h3>GET AN INVITE</h3>
          <img src={line} alt="icon"></img>
          <img className="arrow" src={arrow} alt="icon"></img>
        </div>
        <p className="footer-p">Copyright 2019. All Rights Reserved</p>
      </div>

      <div className="tablet-footer">
        <div className="wrapper">
          <div className="tablet-h2">
            <img src={triangle} alt="icon"></img>
            <h2>PHOTOSNAP</h2>
            <ul className="desktop-ul">
              <li>
                <Link className="link-line" to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="link-line" to="/stories">
                  STORIES
                </Link>
              </li>
              <li>
                <Link className="link-line" to="/features">
                  FEATURES
                </Link>
              </li>
              <li>
                <Link className="link-line" to="/pricing">
                  PRICING
                </Link>
              </li>
            </ul>
          </div>

          <div className="get-invite-tablet">
            <h3>GET AN INVITE</h3>
            <img src={line} alt="icon"></img>
            <img className="arrow" src={arrow} alt="icon"></img>
          </div>
        </div>
        <ul className="tablet-ul">
          <li>
            <Link className="link-line" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="link-line" to="/stories">
              STORIES
            </Link>
          </li>
          <li>
            <Link className="link-line" to="/features">
              FEATURES
            </Link>
          </li>
          <li>
            <Link className="link-line" to="/pricing">
              PRICING
            </Link>
          </li>
        </ul>
        <div className="wrapper2">
          <div className="icon-div-tablet">
            <img
              onMouseOver={() => setHover(!hover)}
              onMouseLeave={() => setHover(!hover)}
              src={hover ? facebook : facebook1}
              alt="icon"
            ></img>
            <img
              onMouseOver={() => setHover2(!hover2)}
              onMouseLeave={() => setHover2(!hover2)}
              src={hover2 ? youtube : youtube1}
              alt="icon"
            ></img>
            <img
              onMouseOver={() => setHover3(!hover3)}
              onMouseLeave={() => setHover3(!hover3)}
              src={hover3 ? twitter : twitter1}
              alt="icon"
            ></img>
            <img
              onMouseOver={() => setHover4(!hover4)}
              onMouseLeave={() => setHover4(!hover4)}
              src={hover4 ? pinterest : pinterest1}
              alt="icon"
            ></img>
            <img
              onMouseOver={() => setHover5(!hover5)}
              onMouseLeave={() => setHover5(!hover5)}
              src={hover5 ? inst : inst1}
              alt="icon"
            ></img>
          </div>

          <p className="footer-p">Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
