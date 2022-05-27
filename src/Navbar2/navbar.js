import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';


export default function navbar() {

  const Liste = () => {
    let liste = document.getElementsByClassName('liste');
    let button = document.getElementsByClassName('btn_burger');

    console.log(liste);

    if (liste[0].className !== 'liste') {
      liste[0].classList.remove('active');
      button[0].classList.remove('active');
    }
    else {
      liste[0].classList.add('active');
      button[0].classList.add('active');
    }
  }

  const Fermer = () => {
    let liste = document.getElementsByClassName('liste');

    liste[0].classList.remove('active');
  }

  return (
    // creation de la liste de la nave barre 
    <nav>
      <button className="btn_burger" onClick={Liste}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className="liste_container">
        <ul className="liste">

          <li><NavLink to="/" className="items">Acceuil</NavLink></li>
          <li><NavLink to="Information" className="items">Information</NavLink></li>
          <li><NavLink to="Membre" className="items">Membre</NavLink></li>
          <li><NavLink to="Histoire" className="items">Notre histoire</NavLink></li>
          <li><NavLink to="Contact" className="items">Contact</NavLink></li>

        </ul>
      </div>

    </nav>
  )
}
