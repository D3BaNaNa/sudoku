import '../App.css';

const Tile = props => {

    const style = {
        color: "black",
        height: "10vh",
        width: "10vh",
        backgroundColor: "gray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        fontFamily: "Times New Roman",
        borderRight: "0px",
        borderBottom: "0px"

    }

    return (
    
    <div className="tile">
        <h1 style={style}>{props.number}</h1>
    </div>


)
  
  }

export default Tile;