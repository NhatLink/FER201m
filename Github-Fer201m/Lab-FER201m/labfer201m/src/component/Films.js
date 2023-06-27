
import React, { Component } from "react";
import { films } from "../Shared/ListOfFilms";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
export default function Film() {
  const [film, setFilm] = useState([]);
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div class="projects">
      <h1 class="heading" style={{ backgroundColor: theme.backgroundColor }}> List of Films </h1>
      <div class="box-container" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        {films.map((film) => (
          <div key={film.id}>
            <div src={film.image} className="box" >
              <div className="image">
                <img src={film.image} alt={film.title} />
              </div>
              <div className="content" >
                <div className="info">
                  <h5 style={{ color: theme.color }}>{film.title}</h5>
                  <p style={{ color: theme.color }}>{film.year} - {film.nation}</p>
                </div>
                {/* <p className="but"><button onClick={()=>{setFilm(film)}}><a href='#popup1' id='openPopUp'>Detail</a></button></p> */}
                <Link to={`detail/${film.id}`}>
                  <p className="but"><button>Detail</button></p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id='popup1' className='overlay'>
        <div className='popup'>
          <img src={film.image} />
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