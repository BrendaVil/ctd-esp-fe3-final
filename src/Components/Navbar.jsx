import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <Link to={routes.home}>Home</Link>{" "}
      <Link to={routes.contact}>Contact</Link>{" "}
      <Link to={routes.fav}>Favs</Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar