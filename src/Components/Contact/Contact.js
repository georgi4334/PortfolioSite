import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="container-fluid contactMe" id="contact">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h2>
            Do not hesitate to contact me{" "}
            <div className="contactMeButton">
              <a href="mailto:georgi3333@hotmail.com">
                {" "}
                <div className="underline">Here</div>{" "}
              </a>
            </div>
          </h2>
          <div className="foooterWrap">
            <hr />
            <div className="innerFooterWrapper">
              <div>
                <small>Designed by G_Naydenov</small>
              </div>
              <div className="socialIcons">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/georgi4334"
                >
                  <i class="fab fa-github"> </i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/georgi-naydenov-51166692/"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
