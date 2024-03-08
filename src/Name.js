// Name.js
import React from "react";
// Dans chaque fichier de composant, ajoutons cette ligne d'importation
import product from './product';

const Name = ({ name }) => {
  return <h2>{name}</h2>;
};

export default Name;