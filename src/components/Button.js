import React from "react"

const Button = ({ children, onClick, isLoading, disabled, className, ...rest }) => (
  <button
    className={`button ${className}`}
    onClick={isLoading ? null : onClick}
    {...rest}
    disabled={disabled || isLoading}
  >
    {children}
  </button>
)

export default Button
