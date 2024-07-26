class Grid {

    constructor(gridWidth, gridHeight) {
        this.gridWidth = gridWidth
        this.gridHeight = gridHeight
        this.grid = {}
        
        this.emptyGrid();
    }

    emptyGrid() {
        for (let i = 1; i <= this.gridWidth; i++) {
            for (let j = 1; j <= this.gridHeight; j++) {
                this.grid[`${j},${i}`] = "";
            }
                 
        }

    }


    getRow(num) {
        num = String(num)
        let returnedList = []

        let filtered = Object.keys(this.grid).filter((item) => {

            return (item[0]) === num
        })

        for (const item of filtered) {
            returnedList.push(this.grid[item])

        }

        return returnedList;
        
    }

    getColumn(num) {
        num = String(num)
        let returnedList = []

        let filtered = Object.keys(this.grid).filter((item) => {

            return (item[2]) === num
        })

        for (const item of filtered) {
            returnedList.push(this.grid[item])

        }

        return returnedList;

    }

    

    makeGrid() {
        // initializes the grid


    }

    displayGrid(color = [0, 0, 0]) {
        // visually displays the grid


    }

    getClicked() {
        // returns which square of the grid was clicked on


    }

    changeTile(x, y) {
        // changes a tile's appearance


    }




}



class Sudoku extends Grid {

    constructor(gridWidth, gridHeight, difficulty="easy") {
        super(gridWidth, gridHeight);
        this.difficulty = difficulty

        this.emptyGrid()
    }

    getCell(num) { // WARNING: Might not work! <--------------------

        let translated = this.translateCell(num)

        for (let element of translated) {
            element = this.grid[element]

        }
        

        return translated;



    }

    generateFilled() {

        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        shuffleArray(numbers)
        
        // loops through 1 - 9, as in the numbers used in sudoku
        for (const number of numbers) {

            // loops through each 3x3 (cell)
            for (let cell = 1; cell <= 9; cell++) {

                let translated = this.translateCell(cell);
                shuffleArray(translated);

                // loops through each tile of 3x3 cell
                for (const element of translated) {

                    // if the number isn't already in the row/column
                    if (!this.getRow(Number(element[0])).includes(number)
                  && !this.getColumn(Number(element[2])).includes(number)) {

                        this.grid[`${element[0]},${element[2]}`] = number;
                        break;

                    }

                }

            }


        }

        // switching out stuff that caused problems

        // for (const key of Object.keys(this.grid)) {
        //     if (this.grid[key] === "") {

        //         // finds which is less, the number of valid numbers
        //         // in the row, or valid numbers in the column
        //         let lesser = minIndex(new Set(this.getRow(key[0])).length, 
        //         new Set (this.getRow(key[2])).length)

        //     }


        // }

    
    }

    translateCell(num) {

        // translate given num to coordinate pair
        let coords = [num % 3, Math.ceil(num/3)],
            returnedList = [];

        if (coords[0] === 0) { coords[0] = 3 };

        let translation = {
            1: [1, 2, 3],
            2: [4, 5, 6],
            3: [7, 8, 9]

        };

        for (const item of translation[coords[0]]) {
            for (const element of translation[coords[1]]) {
                returnedList.push(`${item},${element}`)
            
            }

        }

        return returnedList;

    }

    generate(difficulty) {}

    solve() {}

    hint() {}

}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const minIndex = (array) => {
    return array.indexOf(Math.min(...array))


}


let test = new Sudoku(9, 9)
test.generateFilled()
console.log(test.grid)

// let bigNum = 0;
// let num = 0;
// for (let i = 0; i < 100; i++) {
//     test.emptyGrid()
//     test.generateFilled()

//     num = 0;

//     for (const value of Object.values(test.grid)) {
//         // console.log(value)

//         if ((value) !== "") { 
//             num++; 
//         }

//     }

//     bigNum += num/81
//     console.log(num/81)
// }
// console.log(bigNum/100);

export default Sudoku;