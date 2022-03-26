import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";
import sajib from "../../../images/hero.png";

const Banner = () => {
  return (
    <div>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Sajib Hossen</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[
                    " Professional Coder.",
                    " React Developer.",
                    " Javascript Developer.",
                    " Front-End-Developer.",
                    " Back-End-Developer.",
                    " MERN-Stack-Developer.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <a href="https://www.facebook.com/profile.php?id=100018329389359">
                      Facebook
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">React</button>
                <button className="btn_shadow">Js</button>
                <button className="btn_shadow">Node.js</button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={sajib} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
