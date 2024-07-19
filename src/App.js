import './App.css';
import Image from "./components/Image"
import SudokuLogo from "./assets/sudoku_logo.png"
import "./index.css"

const Header = () => {
  const Style = {
    fontSize: "100px",
    color: "gray",
    fontFamily: "Georgia",
    marginTop: "0px"
  }
  return (<h1 style={Style} > <b>Sudoku</b> </h1>)

}


function App() {
  return (
    <div className="titleAndLogo">

      <div className="colCentered">

        <Header />
        <Image src={SudokuLogo} alt="Logo" width="256" height="256" />

      </div>

      

    </div>
  )
}

export default App;

