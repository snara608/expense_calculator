import React from 'react';

const Button = ({ children, handleClick, type = "button", variant = "primary", shadow = false, ...props }) => {
    return (
        <button 
            type={type} 
            onClick={handleClick} 
            className={`btn-${variant} ${shadow ? 'shadow' : ''}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;