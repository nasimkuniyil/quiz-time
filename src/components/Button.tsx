import React from 'react'

interface IButton{
    children:React.ReactNode;
    onClick:()=>void;
    className?:string;
}

const Button:React.FC<IButton> = ({children, onClick, className}) => {
  return (
    <button className={`px-3 py-2 rounded cursor-pointer ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button