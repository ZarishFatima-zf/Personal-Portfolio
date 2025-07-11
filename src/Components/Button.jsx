import React, { useState } from 'react';
import { Button as MuiButton } from '@mui/material';

function Button({ text, width, height, onClick }) {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    color: 'White',
    fontfamily: 'Poppins', 
    fontSize: '22px',
    fontWeight: '600',
    background: 'linear-gradient(to top, #1c0128, #183552, #183552, #1c0128)',
    border: '1px solid transparent',
    borderRadius: '99px',
    width: width, 
    height: height,
    transition: 'transform 0.3s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: hovered ? 'scale(0.95)' : 'none',
    animation: 'fadeInUp 1s ease-out forwards',

};

  return (
    <MuiButton
      variant="outlined"
      style={buttonStyle}
      className="subHeading" 
      onClick={onClick}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
