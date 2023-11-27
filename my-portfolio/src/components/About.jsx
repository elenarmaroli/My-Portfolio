import React from "react";

import profilePicture from "../Images/profile-picture.jpg";

const About = () => {
  return (
    <div>
      <section class="about" id="about">
        <div class="propic">
          <img src={profilePicture} alt="The developer behind this project" />
        </div>
        <h1 class="tilt-in-right-2">
          ELENA
          <br />
          ARMAROLI
        </h1>
        <div class="intro">
          <p>
            Hey there, <br /> My name is Elena and I am a Humanities graduate
            turned into a <i>FULL STACK WEB DEVELOPER</i> with a passion for
            arts and creative writing.
            <br />
            <br /> My skill set includes:
          </p>
          <p class="skills">
            HTML, CSS/SaSS, JavaScript, React.js, Node.js, Express.js, Mongo DB,
            Figma.
          </p>
        </div>

        <div class="social-media">
          <a
            href="https://www.linkedin.com/in/elenarmaroli/"
            target="_blank"
            alt="LinkedIn icon"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/elenarmaroli"
            target="_blank"
            alt="GitHub icon"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
