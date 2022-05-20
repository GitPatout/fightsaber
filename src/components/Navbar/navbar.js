import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function navbar() {
  return (
    // creation de la liste de la nave barre 

    <nav>
        <ul className="liste">

          <NavLink><li className="items">Acceuil</li></NavLink>
          <NavLink><li className="items">Information</li></NavLink>
          <NavLink><li className="items">Membre</li></NavLink>
          <NavLink><li className="items">Notre histoire</li></NavLink>
          <NavLink><li className="items">Contact</li></NavLink>
        </ul >

    <img src="./images/titre.jpeg" alt="image fighter" />
       
    </nav >
  )
}
