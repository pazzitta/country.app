import {Route} from 'react-router-dom';
import './App.css';
import LandingPage  from './Components/LandingPage/landing';
import HomePage from './Components/Home/home';
import DetailCountry from './Components/Detail/detail';
import NewActivity from './Components/Create/newActivity';

// LISTO TODA LA CONFIGURACIÓN DE RUTAS!

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={HomePage} />
      <Route path='/detail' component={DetailCountry} />
      <Route path= '/create' component={NewActivity} />
    </div>
  );
}

export default App;
