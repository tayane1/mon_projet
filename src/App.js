import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from "react";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./product";
import Ange from "./asset/Ange.jpg";



const App = () => {
  const { name, price, description, image } = product;
  const prenom = "Ange"; // Remplacez cela par votre prénom ou une variable contenant votre prénom

  return (
    <div>
      <center>
      <Card style={{ width: "30rem", marginTop:"20px" }}>
        <Card.Body>
          <Name name={name} />
          <Price price={price} />
          <Description description={description} />
          <Image image={image} />
        </Card.Body>
      </Card>
      <p>Bonjour, {prenom} !</p>
      {prenom && <img src={Ange} alt="Ange" style={{width: "400px"}} />}
      </center>
    </div>
  );
};

export default App;

