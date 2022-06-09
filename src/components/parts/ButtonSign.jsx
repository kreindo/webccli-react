import React from 'react';
const ButtonSign = (props) => {
  // const [name, setClick] = useState();

  return (
    <button className={props.class} style={props.style}>
      {props.name}
    </button>
  );
};

export default ButtonSign;
