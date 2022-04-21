import {Route, BrowserRouter, Routes} from 'react-router-dom';
import './App.css';
import LandingPage  from './Components/LandingPage/landing';
import HomePage from './Components/Home/home';
import DetailCountry from './Components/Detail/detail';
import NewActivity from './Components/Create/newActivity';

// LISTO TODA LA CONFIGURACIÓN DE RUTAS!

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path= "/" element={<LandingPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/detail/:id' element={<DetailCountry/>} />
        <Route path= '/create' component={<NewActivity/>} />
      </Routes>
      </BrowserRouter>

             
    </div>
  );
}

export default App;
