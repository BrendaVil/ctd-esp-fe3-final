import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact  from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import {Routes, Route} from 'react-router-dom';
import React, { useState } from 'react';
import "./index.css";
import ThemeContext, { themes } from './Components/utils/context';
import Layout from "./Components/Layout";


function App() {
  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light)
    if (theme === themes.light) setTheme(themes.dark)
  }

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <div className="App">
        <Layout>
          <Navbar/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/fav' element={<Favs/>}/>
                <Route path='/detail/:id' element={<Detail/>}/>
            </Routes>
          <Footer/>
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
