import React from 'react';

const Button = ({ children, handleClick, type = "button", style = "primary", shadow = false, ...props }) => {
    return (
        <button 
            type={type} 
            onClick={handleClick} 
            className={`btn-${style} ${shadow ? 'shadow' : ''}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;