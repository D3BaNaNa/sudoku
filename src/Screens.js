// importing all necessary files
import './App.css';
import Image from "./components/Image";
import Button from "./components/Button";
import SudokuLogo from "./assets/sudoku_logo.png";
import Header from "./components/Header";
import { Link } from "react-router-dom"
import SudokuGrid from './components/SudokuGrid';
import Timer from './components/Timer';
import Menu from './components/Menu';

// main menu display
const MainMenu = () => {

    return (
      <>
      <div className="titleAndLogo">

        <div className="colCentered">

          {/* title and logo are displayed with these two elements */}

          <Header />
          <Image src={SudokuLogo} alt="Logo" width="256" height="256" />

        </div>

        

      </div>

      {/* buttons on the right side are created here */}

      <div className="menuButtons">
        <Button
        text={<Link to="/game" className="link">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          New Game&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>}/>
        
          <Button
        text={<Link to="/settings" className="link">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Settings&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>}/>


        <Button
        text={<Link to="/help" className="link">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>}/>


      </div>
    </>
      
    )

}


const Game = () => {

  return (
    <>

      <Menu />
      <SudokuGrid />
      <Timer />

    </>
    
  )

}


const Help = () => {

  const divStyle = {
    width: "clamp(45ch, 50vw, 75ch)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "5vw"

  }

  const paraStyle = {
    fontSize: "2em",
    textAlign: "center",

  }

  const headingStyle = {
    fontSize: "4em"

  }

  return (
    <>
      <div style={divStyle}>
        <h1 style={headingStyle}>Help</h1>
        <p style={paraStyle}>Sudoku is a logic-based puzzle game where one must
          fill a 9 by 9 
          grid with the numbers 1-9. A number is not allowed to be repeated
          in the same row or column. There are also 9 3x3 cells in the grid.
          The same number cannot be present in the same cell.

          If you encounter a bug or have any issue, please report it at this <a 
          href="https://github.com/D3BaNaNa/sudoku" rel="noreferrer noopener"
          target="_blank">GitHub page</a>.
        </p>
      </div>
      <div style={divStyle}>
          <h1 style={headingStyle}>Controls</h1><p style={paraStyle}>
            You can use the number keys 1-9 to fill in a tile in the grid.
            Left-click a tile to select it, and right click a tile to erase
            what is currently in it. Use the hint button if you are stuck - 
            it will reveal a number on the grid.
          </p>
        </div>
    </>
  )



}


const Settings = () => {
  return (
    <div className="settings">
      <h1>Settings</h1>

    </div>


  )


}



export {MainMenu, Game, Help, Settings}
