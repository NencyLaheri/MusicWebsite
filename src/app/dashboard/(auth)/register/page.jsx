"use client"
import React, { useContext,useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { ThemeContext } from '@/context/ThemeContext'

const Register = () => {
    const { toggle,mode }=useContext(ThemeContext) 
    const inpuStyle={
      color:mode=="dark" ? "grey" : "black",
      border:mode=="dark" ? "2px solid #bbb" : "2px solid black",
    }
  
  const btnStyle={color:mode=="dark" ? "white" : "black",}
    
  
    const handleInputFocus = (event) => {
      event.target.style.borderColor = mode === 'dark' ? 'white' : 'lightgrey';
    };
  
    const handleInputBlur = (event) => {
      event.target.style.borderColor = mode === 'dark' ? 'grey' : 'black';
    };

    const handleSubmit= async(e)=>
    {
        const [err, setErr] = useState(false);
        e.preveneDefault()
        const name=e.target[0].value
        const email=e.target[0].value
        const password=e.target[0].value

        try
        {
            const res=await fetch("/api/auth/register")
        }catch(err)
        {
            setErr(true)
        }
    }
  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' className={styles.input} required style={inpuStyle} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
        <input type="email" placeholder='Email' className={styles.input} required style={inpuStyle} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
        <input type="password" placeholder='Password' className={styles.input} required style={inpuStyle} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
        <button className={styles.button} style={btnStyle}>Register</button>
      </form>
      {err && "Something went Wrong"}
      <Link href="/dashboard/login">Login with exsting account</Link>
    </div>
  )
}

export default Register
