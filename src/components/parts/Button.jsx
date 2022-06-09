import React from 'react';
const Button = (props) => {
  // const [name, setClick] = useState();

  return (
    <button className="btn" style={{ margin: '48px' }}>
      {props.name}
    </button>
  );
};

export default Button;
