import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import CatFact from "./pages/CatFact";
import {Route, Routes} from 'react-router-dom'
import AlertDismissibleExample from './components/Alerts'
import Adoption from "./pages/Adoption";

function App() {
  return (
    <div className="App">
      <AlertDismissibleExample />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catfact/:parameter" element={<CatFact />} />
        <Route path = "/adoption" element = {<Adoption/>}/>
      </Routes>
    </div>
  );
}

export default App;
