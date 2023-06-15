
import React, { Component } from "react";
import { Players } from "../Shared/ListOfPlayers";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
export default function Film() {
  const [player, setPlayer] = useState([]);
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div class="projects">
      <h1 class="heading" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}> List of Player </h1>
      <div className="box-container">
        {Players.map((player) => (
          <div key={player.id}>
            <div className='box'>
              <div className="image">
                <img src={player.img} />
              </div>
              <div className="player_info">
              <h5>{player.name}</h5>
              {/* <p className='title'>{player.club}</p> */}
              {/* <p className="but"><button onClick={() => { setPlayer(player) }}><a href='#popup1' id='openPopUp'>Detail</a></button></p> */}
              <Link to={`detail/${player.id}`}>
                <p className="but"><a>Detail</a></p>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id='popup1' className='overlay'>
        <div className='popup'>
          <img src={player.img} />
          <h2>{player.name}</h2>
          <a className='close' href='#'>&times;</a>
          <div className='content'>
            {player.info}
          </div>
        </div>
      </div>
    </div>
  )
}