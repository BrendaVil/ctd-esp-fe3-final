import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact  from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
      <div className="App">
          <Navbar/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/fav' element={<Favs/>}/>
                <Route path='/detail/:id' element={<Detail/>}/>
            </Routes>
          <Footer/>
      </div>

  );
}

export default App;
