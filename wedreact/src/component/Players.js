
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
    //     <div class="projects">
    //       <h1 class="heading" style={{ backgroundColor: theme.backgroundColor }}> List of Player </h1>
    //       <div class="box-container">
    //         {Players.map((player) => (
    //           <div key={player.id}>
    //             <div src={player.img} className="box">
    //               <div className="image">
    //                 <img src={player.img} alt={player.name} />
    //               </div>
    //               <div className="content">
    //                 <div className="info" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
    //                   <h5 style={{ color: theme.color }}>{player.name}</h5>
    //                   <p style={{ color: theme.color }}>{player.club}</p>
    //                 </div>
    //                 {/* <p className="but"><button onClick={()=>{setFilm(film)}}><a href='#popup1' id='openPopUp'>Detail</a></button></p> */}
    //                 <Link to={`detail/${player.id}`}>
    //                   <p className="but"><button style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Detail</button></p>
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //       <div id='popup1' className='overlay'>
    //         <div className='popup'>
    //           <img src={player.img} />
    //           <h2>{player.name}</h2>
    //           <a className='close' href='#'>&times;</a>
    //           <div className='content'>
    //             {player.info}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )
    // }


    <div class="projects">
      <h1 class="heading" style={{ backgroundColor: theme.backgroundColor }}> List of Player </h1>
      <div className="box-container">
        {Players.map((player) => (
          <div key={player.id}>
            <div className='box'>
              <div className="image">
                <img src={player.img} />
              </div>
              <h3>{player.name}</h3>
              <p className='title'>{player.club}</p>
              {/* <p className="but"><button onClick={() => { setPlayer(player) }}><a href='#popup1' id='openPopUp'>Detail</a></button></p> */}
              <Link to={`detail/${player.id}`}>
                <p className="but"><button style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Detail</button></p>
              </Link>
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