import { useParams } from 'react-router-dom'
import { Players } from '../Shared/ListOfPlayers'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
export default function Film() {
    const userName = useParams();
    const { theme, toggle, dark } = useContext(ThemeContext)
    const player = Players.find(obj => {
        return obj.id == userName.id;
    });
    //    let cost = film.cost.toLocaleString();
    return (
        <div className='container'>
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