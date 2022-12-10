import React from "react";
import { Link } from 'react-router-dom';
import { useContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {

  const{dispatchFavs} = useContextGlobal()

  const addFav = (dentist)=> {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatchFavs({type: 'ADD_FAV', payload: dentist})
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link key={dentist.id} to={`/detail/${dentist.id}`}>
        <img src="./images/doctor.jpg" width={200}/>
        <p>{dentist.name}</p>
        <p>{dentist.username}</p>
        </Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={() => addFav(dentist)} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
