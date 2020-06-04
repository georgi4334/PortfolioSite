import React, { Component } from "react";

import Logo from "./../../images/32f0c6e3-ac07-408a-905f-37e6b0976254_200x200.png";
import "./Nav.scss";

window.onscroll = function () {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    this.document.querySelector("img").style.height = "90px";
    this.document.querySelector("nav").style.background = "white";
    this.document.querySelector(".navMenu").classList.add("chBlack");
    this.document.querySelector(".rmScroll").style.display = "none";
    this.document.querySelector(".hamburger>div").style.background = "black";
   
  } else {
    this.document.querySelector("img").style.height = "120px";
    this.document.querySelector("nav").style.background = "transparent";
    this.document.querySelector(".navMenu").classList.remove("chBlack");
    this.document.querySelector(".rmScroll").style.display = "block";
    this.document.querySelector(".hamburger>div").style.background = "white";
  }
};

export default class Nav extends Component {
  render() {
    return (
      
      <nav className="navMenu">
        <div className="logoContainer">
          <img src={Logo} alt="Code element logo" />
        </div>
        
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div> </div>
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <a href="#projects"> Portfolio </a>
                  </li>
                  <li>
                    <a href="#AboutMe"> About </a>
                  </li>
                  <li>
                    <a href="#contact"> Contact </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="itemsContainer">
          <ul>
            <li>
              <a href="#projects"> Portfolio </a>
            </li>
            <li>
              <a href="#AboutMe"> About </a>
            </li>
            <li>
              <a href="#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </nav>
      
    );
  }
}
