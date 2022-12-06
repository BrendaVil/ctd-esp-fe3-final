import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact  from "./Routes/Contact";
import Favs from "./Routes/Favs";
import {routes} from "./routes";
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
      <div className="App">
          <Navbar/>
            <Routes>
                <Route path={routes.home} element={<Home/>}/>
                <Route path={routes.contact} element={<Contact/>}/>
                <Route path={routes.fav} element={<Favs/>}/>
            </Routes>
          <Footer/>
      </div>

  );
}

export default App;
