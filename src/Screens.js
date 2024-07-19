import './App.css';
import Image from "./components/Image";
import Button from "./components/Button";
import SudokuLogo from "./assets/sudoku_logo.png";
import "./index.css";
import Header from "./components/Header"


const MainMenu = () => {

    return (
      <>
      <div className="titleAndLogo">

        <div className="colCentered">

          <Header />
          <Image src={SudokuLogo} alt="Logo" width="256" height="256" />

        </div>

        

      </div>

      <div className="menuButtons">
        <Button text="New Game"></Button>
        <Button text="Settings"></Button>
        <Button text="Help"></Button>


      </div>
    </>
      
    )

}

export default MainMenu