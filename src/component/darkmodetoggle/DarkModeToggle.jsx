"use client "
import React, { useContext } from 'react'
import styles from './DarkModeToggle.module.css'
import { HiMoon } from 'react-icons/hi'
import { HiOutlineSun } from 'react-icons/hi'
import { ThemeContext } from '@/context/ThemeContext'
 
const DarkModeToggle = () => {

  const { toggle,mode } =useContext(ThemeContext) 
  return (
    <div className={styles.container} onClick={toggle}>
      <HiMoon className={styles.icon}/>
      <HiOutlineSun className={styles.icon}/>
      <div className={styles.ball} style={mode=="light" ? {left:"2px"} : {right:"2px"}}/>
    </div>
  )
}

export default DarkModeToggle
