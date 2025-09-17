import React from 'react'

interface IButton{
    children:React.ReactNode;
    onClick:()=>void;
    className?:string;
    disabled?:boolean
}

const Button:React.FC<IButton> = ({children, onClick, className, disabled}) => {
  return (
    <button className={`px-6 py-2 rounded cursor-pointer ${className} disabled:opacity-50`} onClick={onClick} disabled={disabled}>
        {children}
    </button>
  )
}

export default Button