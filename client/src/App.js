import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Map from './components/Map'

import { Route, NavLink, Routes, HashRouter } from "react-router-dom";

import "./App.css"

function App() {
  return (
    <HashRouter>
      <div className="app font-face-roboto">
        <nav className="header">
          <ul>
            <li><NavLink className="nav-button" to="/">Home</NavLink></li>
            <li><NavLink className="nav-button" to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink className="nav-button" to="/map">Map</NavLink></li>
          </ul>
        </nav>
        <div className="app__body">
          <Routes>
            <Route exact="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/map" element={<Map/>} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
