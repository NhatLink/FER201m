
import React, { Component } from "react";
import { films } from "../Shared/ListOfFilms";
import { useState } from "react";
export default function Film(){
  const [film, setFilm] = useState([]);
    return (
    <div class="projects">
      <h1 class="heading"> List of Films </h1>
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
                   <p className="but"><button onClick={()=>{setFilm(film)}}><a href='#popup1' id='openPopUp'>Detail</a></button></p>
                 </div>
               </a>
             </div>
           ))}
        </div>
        <div id ='popup1' className='overlay'>
          <div className='popup'>
            <img src={film.image}/>
            <h2>{film.name}</h2>
            <a className='close' href='#'>&times;</a>
            <div className='content'>
              {film.info}
            </div>
          </div>
        </div>
    </div>
  )
}
    //     <section class="projects" id="projects">
    //     <h1 class="heading"> List of Films </h1>
    //     <div class="box-container">
    //         {films.map((film) => (
    //           <div key={film.id}>
    //             <a src={film.image} className="box">
    //             <div className="image">
    //               <img src={film.image} alt={film.title} />
    //               </div>
    //               <div className="content">
    //               <div className="info">
    //                 <h5>{film.title}</h5>
    //                 <p>{film.year} - {film.nation}</p>
    //                 {/* <p className="but"><button onClick={()=>{setFilm(film)}}><a href='#popup1' id='openPopUp'>Detail</a></button></p> */}
    //               </div>
    //               </div>
    //               </a>
    //           </div>
    //         ))}
    //       </div>
    //  </section>