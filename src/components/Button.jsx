import React from 'react';
import { useStateContext } from '../context/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {

  const {handelClose } = useStateContext();


  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      onClick={() => handelClose('chat')}
    >
      {icon} {text}
    </button>
  );
};

export default Button;