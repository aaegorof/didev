import React from "react"

const Button = ({ children, onClick, isLoading, disabled, ...rest }) => (
  <button className="button" onClick={isLoading ? null : onClick} {...rest} disabled={disabled || isLoading}>
    {children}
  </button>
)

export default Button
