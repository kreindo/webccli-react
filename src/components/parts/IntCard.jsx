import React from 'react';
const IntCard = () => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        margin: '65px 30px',
        width: '379px',
        height: '386px',
        borderRadius: '12px',
        wordWrap: 'break-word',
      }}
    >
      <div>logo</div>
      <div style={{ wordWrap: 'break-word' }}>
        <div>title</div>
        <div style={{}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          doloremque.
        </div>
        <div>
          <button>learn more</button>
        </div>
      </div>
    </div>
  );
};

export default IntCard;
