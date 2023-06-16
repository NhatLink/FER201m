import { useParams } from 'react-router-dom'
import { Players } from '../Shared/ListOfPlayers'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import { useState } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize'
import ModalCase from './ModalCase';
export default function DetailPlayer() {
    const userName = useParams();
    const { theme, toggle, dark } = useContext(ThemeContext)
    const player = Players.find(obj => {
        return obj.id == userName.id;
    });
    const [isOpen, setIsOpen] = useState(false);
    //    let cost = film.cost.toLocaleString();
    return (

        <div className='container'>
            <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                <Icon>ondemand_video</Icon>
            </a>
            {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
            <div class="heading2">
                <h5>{player.name}</h5>
            </div>
            <section class="detail">

                <div class="row">
                    <div class="image_player">
                        <img src={`../${player.img}`} alt='' />
                        {/* <h3 style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Watch Trailer</h3> */}
                    </div>
                    <div class="info_player">
                        <div class="info_player_2">
                            <h2>{player.club}</h2>
                        </div>
                        <div class="info_player_2">
                            <h3>Maket Value: €{player.cost}</h3>
                        </div>
                        <div class="info_player_2">
                            <h5>{player.info}</h5>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}