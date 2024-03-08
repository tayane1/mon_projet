// Description.js
import React from "react";
// Dans chaque fichier de composant, ajoutons cette ligne d'importation
import product from './product';

const Description = ({ description }) => {
  return <p>{description}</p>;
};

export default Description;
