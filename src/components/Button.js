const Button = props => {

    let Style = {
        backgroundColor: "orange",
        border: "4px solid black",

        width: "60%",
        height: "12vh",

        textAlign: "center",
        display: "table-cell",
        verticalAlign:"middle",

        fontFamily: "Times New Roman",
        fontSize: "48px",
        color: "black", // text color

        // marginTop: "6px",
        // marginBotton: "6px"
  
    }

    const handleClick = () => {
        


    }
  
      return (
      <button style={Style} onClick={handleClick}>
        {props.text}
      </button>)
    
    }
  
  export default Button;
  