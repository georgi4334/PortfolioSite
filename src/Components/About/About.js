import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import Html from "../../images/html.png";
import Css from "./../../images/css.png";
import Sass from "../../images/sass.png";
import Javascript from "./../../images/javascript.png";
import Bootstrap from "./../../images/bootstrap.png";
import SQL from "./../../images/sql-server.png";
import ReactLogo from "./../../images/react.png";
import Git from "./../../images/git.png";
import Linux from "../../images/linux-penguin-logo-character-symbol-of-the-operative-system.png";
import Windows from "../../images/windows.png";
import ProgrammingLogo from "../../images/—Pngtree—programming and web technology vector_4089305.png";
import "./About.scss";



const calc = (o) => {
  if (window.innerWidth < 750) {
    return `translateY(${o * 0}px)`;
  } else {
    return `translateY(${o * 0.09}px)`;
  }
};

const About = () => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <section className="container-fluid " id="AboutMe">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="aboutMeText">
            <h2>About me</h2>
            <p>
              My name is Georgi Naydenov and I am a self-taught web developer
              from Bulgaria.I started my journey in January 2019 until present.
              I decided to change my career and go with frontend, because web
              applications are one of the most innovating technologies and it
              has all the opportunities I've desired: analytical
              thinking,problem solving attitude, creativity, design, attention
              to details, planning and organizing and many more. My main goal is
              to write clean , minimalistic websites/applications that are easy
              to work with, accessible for all people and to meet the highest
              client criteria and desire.
            </p>
            <h2>My Skills: </h2>
            <div className="skills">
              <div className="html cont">
                <img src={Html} alt="html" />
                <p>HTML</p>
              </div>
              <div className="css cont">
                <img src={Css} alt="css" />
                <p>CSS</p>
              </div>
              <div className="bootstrap cont">
                <img src={Bootstrap} alt="Bootstrap" />
                <p>Bootstrap</p>
              </div>
              <div>
                <img src={Sass} alt="sass" />
                <p>SASS</p>
              </div>
              <div className="js cont">
                <img src={Javascript} alt="javascript" />
                <p>
                  JavaScript
                  <br />
                  with ES6
                </p>
              </div>
              <div className="react cont">
                <img src={ReactLogo} alt="React js" />
                <p>React Js</p>
              </div>
              <div className="sql cont">
                <img src={SQL} alt="sql" />
                <p>SQL</p>
              </div>
              <div className="git cont">
                <img src={Git} alt="git" />
                <p>GIT</p>
              </div>
            </div>
            <h2>The OS I am using:</h2>
            <div className="skills">
              <div className="linux cont">
                <img src={Linux} alt="linux" />
                <p>Linux</p>
              </div>
              <div className="windows cont">
                <img src={Windows} alt="windows" />
                <p>Windows</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <animated.div
            ref={ref}
            style={{ transform: offset.interpolate(calc) }}
            className="aboutMePictureCont"
          >
            <img src={ProgrammingLogo} alt="computer svg" />
          </animated.div>
        </div>
      </div>
    </section>
  );
};
export default About;
