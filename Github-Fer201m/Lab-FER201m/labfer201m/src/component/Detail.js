import { useParams } from 'react-router-dom'
import { films } from '../Shared/ListOfFilms'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import { useState } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize'
import ModalCase from './ModalCase';
export default function Film() {
    const [isOpen, setIsOpen] = useState(false);
    const userName = useParams();
    const { theme, toggle, dark } = useContext(ThemeContext)
    const film = films.find(obj => {
        return obj.id == userName.id;
    });
    //    let cost = film.cost.toLocaleString();
    return (
        <div className='container'>
            {/* <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                <Icon>ondemand_video</Icon>
            </a> */}
            {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
            <section class="detail" >
                <h1 class="heading" style={{ backgroundColor: theme.backgroundColor }}>{film.title}</h1>
                <div class="row" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <div class="image_film">
                        <img src={film.image} alt={film.title} />
                        {/* <h3 style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Watch Trailer</h3> */}
                        <p className="but"><button onClick={() => setIsOpen(true)}>Watch Trailer <a onClick={() => setIsOpen(true)}></a></button></p>
                    </div>
                    <div class="info_film">
                        <div class="info_film_2">
                            <h3>Film title</h3>
                            <p>{film.title}</p>
                        </div>
                        <div class="info_film_2">
                            <h3>Film location</h3>
                            <p>{film.year} - {film.nation}</p>
                        </div>
                        <div class="info_film_2">
                            <h3>Film info</h3>
                            <p>{film.info}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}