import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import "../index.css"
import ThemeContext from './utils/context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, handleChangeTheme} = useContext(ThemeContext)

  return (
    <nav>
      <Link to='/home'>Home</Link>{" "}
      <Link to='/contacto'>Contact</Link>{" "}
      <Link to='/fav'>Favs</Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleChangeTheme} style={{background: theme.background, color:theme.font}}>Change Theme</button>
    </nav>
  )
}

export default Navbar