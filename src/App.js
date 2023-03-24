import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import PlantBase from './pages/plantbase'
import { Route, Routes} from "react-router-dom";

//fonts
import "./fonts/Kabel-Black.ttf";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='pages/home.js' element={ <Home /> }/>
          <Route path='pages/plantbase.js' element={ <PlantBase /> }/>
          <Route path='pages/login.js' element={ <Login /> }/>
          <Route path='pages/register.js' element={ <Register /> }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
