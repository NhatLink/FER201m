// import React from 'react'
// export default function ModalCase({ setIsOpen, player }) {
//     return (
//         <div className="modal-show" onclick={() => setIsOpen(false)}>
//             <div id="modall" className="modal" style={{ display: "block", top: "35%" }}>
//                 <div className="modal-content">
//                     <h4>Video for {player.name} </h4>
//                     {/* <p><iframe width="100%" height="400px" src={player.clip} title={player.name} frameborder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /></p> */}
//                 </div>
//                 <div className="modal-footer">
//                     <a className="modal-close red-text">Close</a>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React from 'react'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
export default function ModalCase({ setIsOpen, film }) {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div className='modal-show' onClick={() => setIsOpen(false)}>
            <div id="modall" className="modal" style={{ display: 'block', top: '35%', backgroundColor: theme.backgroundColor, color: theme.color }}> <div className="modal-content">
                <h4>Video for {film.title} </h4>
                <p><iframe width="100%" height="400px" src={film.clip} title={film.name} frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /></p>
            </div>
                <div className="modal-footer">
                    <div className='but'>
                    <button className="modal-close red-text">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}