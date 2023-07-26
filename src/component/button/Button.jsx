"use client"
import React, { useContext }  from 'react'
import styles from './Button.module.css'
import Link from 'next/link'
import { ThemeContext } from '@/context/ThemeContext'

const Button = ({text,url}) => {
  
  const { toggle,mode } =useContext(ThemeContext) 

  const btnStyle = {
    color:mode=="dark" ? "white" : "black",
  };

  return (
    <Link href={url}>
      <button className={styles.container} style={btnStyle}>{text}</button>
    </Link>
  )
}

export default Button
