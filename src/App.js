import {MainMenu, Game, Help} from "./Screens";
import { Route, Routes } from "react-router-dom";



function App() {

  return (

  <Routes>
    <Route path="/" element={<MainMenu />} />
    <Route path="/game" element={<Game />} />
    <Route path="/help" element={<Help />} />
  </Routes>
  
  );
}

export default App;
