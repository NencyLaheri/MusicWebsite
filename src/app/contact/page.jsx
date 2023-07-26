"use client"
import React, { useContext } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/component/button/Button'
import { ThemeContext } from '@/context/ThemeContext'


const Contact = () => {
  const { toggle,mode } =useContext(ThemeContext) 
  const inpuStyle={
    color:mode=="dark" ? "grey" : "black",
    border:mode=="dark" ? "2px solid #bbb" : "2px solid black",
  }

  

  const handleInputFocus = (event) => {
    event.target.style.borderColor = mode === 'dark' ? 'darkgrey' : 'lightgrey';
  };

  const handleInputBlur = (event) => {
    event.target.style.borderColor = mode === 'dark' ? 'grey' : 'black';
  };
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Let's kep in Touch</h1>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image src="/contact.png" alt="" fill={true} className={styles.img}/>
          </div>
          <form className={styles.form}>
            <input type="text" placeholder='Name' className={styles.input} style={inpuStyle} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
            <input type="text" placeholder='Email' className={styles.input} style={inpuStyle} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
            <textarea placeholder="message" id="" cols="30" rows="10" className={styles.textarea} style={inpuStyle} onFocus={handleInputFocus} onBlur={handleInputBlur}></textarea>
            <Button className={styles.btn} url="#" text="Send" />
          </form>
        </div>
    </div>
  )
}

export default Contact
