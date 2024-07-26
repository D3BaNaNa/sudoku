import '../App.css';
import Tile from './Tile';
import Sudoku from "../grid"

const SudokuGrid = () => {

  const grid = new Sudoku(9, 9, "easy");
  grid.generateFilled();

  let tiles = [];

  for (let x = 1; x <= 9; x++) {
    for (let y = 1; y <= 9; y++) {

      // find the value in the grid using the above
      // x and y
      let num = grid.grid[`${x},${y}`]


      tiles.push(<Tile number={num}></Tile>)
      // change tiles list to dictionary instead

    }

  }

    return (    
      <div className="sudokuGrid">
        
        {tiles}
        
        

      </div>

    )
  
  }



export default SudokuGrid;