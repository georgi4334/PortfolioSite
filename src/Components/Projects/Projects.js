import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import Tabata from "../../images/tabata timer.png";
import AllRecipes from "../../images/all recipes.jpg";
import LightDarkModeSite from "../../images/night-day mode based on sunset.png";
import "./Projects.scss";

//calculate parallax
const calcParallax = (o) => {
  if (window.innerWidth < 750) {
    return `translateY(${o * 0}px)`;
  } else {
    return `translateY(${o * 0.05}px)`;
  }
};

const calcParallaxHorizontal = (o) => {
  if (window.innerWidth < 750) {
    return `translateX(${o * 0}px)`;
  } else {
    return `translateX(${o * 0.07}px)`;
  }
};

export default function Projects() {
  const ref = useRef();
  const [{ offset }, setParallax] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    setParallax({ offset });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <section className="container-fluid" id="projects">
      <h2>My Projects</h2>
      <div className="row r1">
        <div className="col-lg-5 col-md-6 col-sm-12 leftCol">
          <animated.div
            ref={ref}
            style={{ transform: offset.interpolate(calcParallax) }}
          >
            <div
              className="imgContainer tabata"
              onClick={() =>
                window.open(
                  "https://wonderful-lovelace-47f4bc.netlify.app/",
                  "_blank"
                )
              }
            >
              <img src={Tabata} alt="Tabata timer website" />
            </div>
          </animated.div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 rightCol">
          <div>
            <div
              className="imgContainer allRecipes"
              onClick={() =>
                window.open(
                  "https://agitated-elion-959d94.netlify.app/",
                  "_blank"
                )
              }
            >
              <img src={AllRecipes} alt="All recipes website" />
            </div>
          </div>
        </div>
      </div>
      <div className="row r2">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <animated.div
            ref={ref}
            style={{ transform: offset.interpolate(calcParallaxHorizontal) }}
          >
            <div
              className="imgContainer DarkModeSite"
              onClick={() =>
                window.open(
                  "https://dreamy-nightingale-44a96e.netlify.app/",
                  "_blank"
                )
              }
            >
              <img
                src={LightDarkModeSite}
                alt="night-day mode website based on sunset-sunrise"
              />
            </div>
          </animated.div>
        </div>
      </div>
      <div className="row r3">
        <div className="col-lg-12 col-sm-12 c3">
          <button
          className="btnCode"
            onClick={() =>
              window.open(
                "https://github.com/georgi4334?tab=repositories",
                "_blank"
              )
            }
          >
            <i class="fab fa-github"> </i> My Code is Here 
          </button>
        </div>
      </div>
    </section>
  );
}
