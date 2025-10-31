

const Button = (props) => {

  return (
    <button className={props.className} onClick={props.handleClick} >
      <img src={props.img} alt="" /> 
      {props.text}
    </button>
  );
};

export default Button;
