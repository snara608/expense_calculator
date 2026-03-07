import React from 'react';

const Button = ({ 
    children, 
    handleClick, 
    type = "button", // Default value
    variant = "primary", 
    shadow = false, 
    ...props 
}) => {
    return (
        <button 
            type={type} // This will be "submit" if passed from AddBalanceForm
            onClick={handleClick} 
            className={`btn-${variant} ${shadow ? 'shadow' : ''}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;