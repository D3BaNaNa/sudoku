const Image = props => {
  const Style = {
    alignItems: "center",

  }

    return (
    <img style={Style} 

    src={props.src} alt={props.alt} 
    width={props.width} height={props.width}
      
    ></img>)
  
  }

export default Image;
