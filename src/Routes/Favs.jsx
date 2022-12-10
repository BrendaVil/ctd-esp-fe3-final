import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const dentistfav = localStorage.getItem("favs")
  const list = dentistfav ? JSON.parse(dentistfav) : [];
  console.log(dentistfav)

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {list.map((item) => <Card key={item.id} dentist={item}/>)}
      </div>
    </>
  );
};

export default Favs;
