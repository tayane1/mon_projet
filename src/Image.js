// Image.js
import React from "react";
// Dans chaque fichier de composant, ajoutons cette ligne d'importation
import product from './product';
import burger from "./asset/burger.jpg"

const Image = ({ image }) => {
  return <img src={burger} alt="product" style={{width: "450px"}} />;
};

export default Image;