import React from "react";
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
          <a href="####" onClick={""}><li className="items">Contact</li></a> 
          <a href="####" onClick={""}><li className="items">Acceuil</li></a> 
          <a href="####" onClick={""}><li className="items">Information</li></a> 
          <a href="####" onClick={""}><li className="items">Membre</li></a> 
          <a href="####" onClick={""}><li className="items">Notre histoire</li></a> 
           
           </ul>
           </div>
           <div className="image">
            <img src=  "./images/titre.jpeg" alt="fighter"/>
            </div>
           
    </nav>
  )
}
