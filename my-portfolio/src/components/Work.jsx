import React from "react";

const Work = () => {
  return (
    <div>
      <section class="work-wrapper">
        <h2 id="work">MY WORK</h2>
        <section class="work">
          <div>
            <a
              href="https://github.com/Marwahaldujaili/beyondwork"
              target="_blank"
            >
              <div class="project1">
                <p class="flip-out-ver-left">Beyond Work</p>
              </div>
            </a>
            <p className="project-description">Corporate social network meant for employees in a company to interact on a personal level. MERN stack group project.</p>
          </div>

          <div>
            <a
            
              href="https://github.com/elenarmaroli/Spotify-React-App"
              target="_blank"
            >
              <div class="project2">
                <p class="flip-out-ver-left">Spotify React App</p>
              </div>
            </a>
            <p className="project-description">Spotify player with Spotify login, search function through Spotify library. Built with React.js and Spotify API.</p>
          </div>

          <div>
            <a href="https://github.com/elenarmaroli/faker-app" target="_blank">
              <div class="project3">
                <p class="flip-out-ver-left">Faker App</p>
              </div>
            </a>
            <p className="project-description">Fullstack MERN project with sign up, log in, log out functions, fetching user data from faker api.</p>
          </div>

          <div>
            <a href="https://github.com/elenarmaroli/BEAN-Cafe" target="_blank">
              <div class="project4">
                <p class="flip-out-ver-left">Bean Café</p>
              </div>
            </a>
            <p className="project-description">Café website, frontend group project built with HTML and CSS. Featuring Home, Menu, Contact and About pages.</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Work;
