import React from 'react';

const Button = ({ children, handleClick, type = "button", variant = "primary", shadow = false, ...props }) => {
    return (
        <button 
            // Ensure type is dynamic and can be "submit"
            {...props}
            type={type} 
            onClick={handleClick} 
            className={`btn-${variant} ${shadow ? 'shadow' : ''}`}
            // Spread props last so they don't get accidentally overwritten
           
        >
            {children}
        </button>
    );
};

export default Button;