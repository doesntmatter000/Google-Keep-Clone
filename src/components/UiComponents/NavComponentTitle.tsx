import React from 'react'
import './NavComponentTitle.scss'

type NavCompoentTitleProps = {
    text:string
}

export const NavComponentTitle = ({text}:NavCompoentTitleProps) => {
  return (
    <span className='NavTitle'>{text}</span>
  )
}
