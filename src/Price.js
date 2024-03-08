// Price.js
import React from "react";
// Dans chaque fichier de composant, ajoutons cette ligne d'importation
import product from './product';

const Price = ({ price }) => {
  return <p>Prix: {price}</p>;
};

export default Price;