"use client"
import React,{useContext} from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'
import Button from '@/component/button/Button'
import { ThemeContext } from '@/context/ThemeContext'


const Login = () => {
  const { toggle,mode }=useContext(ThemeContext)
  const btnStyle={color:mode=="dark" ? "white" : "black",}
  return (
    <div className={styles.container}>
      <button className={styles.button} style={btnStyle} onClick={()=>signIn("google")}>Login With Google</button>

    </div>
  )
}

export default Login
