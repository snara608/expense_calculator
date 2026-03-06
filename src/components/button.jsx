import React from 'react';

const Button = ({ children, handleClick, type = "button", style = "primary", shadow = false }) => {
    return (
        <button 
            type={type} 
            onClick={handleClick} 
            className={`btn-${style} ${shadow ? 'shadow' : ''}`}
        >
            {children}
        </button>
    );
};

export default Button;