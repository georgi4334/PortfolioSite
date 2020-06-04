import React from "react";
import LightBulb from "../../images/—Pngtree—ball of paper and light_1376819(1).png";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from '../Projects/Projects'
import "./Main.scss";

export default function Main() {
  return (
    <div>
      <div className="waveWrapper waveAnimation">
        <div className="wrapperText">
          <div className="containerBulb">
            <img className="logoBulb" src={LightBulb} alt="light bulb" />
          </div>
          <div className="headerText">
            <p> Hello and Welcome to my Portfolio! I am a self-taught</p>
            <h1>web developer</h1>
            <hr className="hr" />
          </div>
          <div className="rmScroll">
            <div className="icon-scroll "></div>
            <p className="scrollText ">SCROLL</p>
          </div>
        </div>
        <div className="waveWrapperInner bgTop">
          <div
            className="wave waveTop"
            style={{
              backgroundImage:
                "url('https://front-end-noobs.com/jecko/img/wave-mid.png')",
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div
            class="wave waveBottom"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-bot.png')",
            }}
          ></div>
        </div>
      </div>
      <Projects />  
      <About />
      <Contact />
          
      <div className="waveWrapperF waveAnimation">
        <div className="waveWrapperInnerF bgTop">
          <div
            className="wave waveTop"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-top.png')",
            }}
          ></div>
        </div>
        <div className="waveWrapperInnerF bgMiddle">
          <div
            class="wave waveMiddle"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
            }}
          ></div>
        </div>
        <div className="waveWrapperInnerF bgBottom">
          <div
            className="wave waveBottom"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-bot.png')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
