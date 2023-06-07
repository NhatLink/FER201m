
import React, { Component } from "react";
import { films } from "../Shared/ListOfFilms";
export default class film extends Component {
    render() {
      return (
        <section class="projects" id="projects">

        <h1 class="heading"> List of Films </h1>
     
        {/* <div class="box-container">
     
           <a href="images/project-1.jpg" class="box">
              <div class="image">
                 <img src="images/project-1.jpg" alt="">
              </div>
              <div class="content">
                 <div class="info">
                    <h3>dream home</h3>
                    <p>construction, design</p>
                 </div>
                 <i class="fas fa-plus"></i>
              </div>
           </a>
        </div> */}
        <div class="box-container">
            {films.map((film) => (
              <div key={film.id}>
                <a src={film.image} className="box">
                <div className="image">
                  <img src={film.image} alt={film.title} />
                  </div>
                  <div className="content">
                  <div className="info">
                    <h5>{film.title}</h5>
                    <p>{film.year} - {film.nation}</p>
                  </div>
                  </div>
                  </a>
              </div>
            ))}
          </div>
     </section>
      );
    };
  }