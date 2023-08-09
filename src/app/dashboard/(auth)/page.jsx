"use client"
import React,{useContext} from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import { ThemeContext } from '@/context/ThemeContext'
import Link from 'next/link'


const Dashboard = () => {

  const { toggle,mode }=useContext(ThemeContext) 
  const btnStyle={color:mode=="dark" ? "white" : "black",}

    const session=useSession()
    console.log("sessionnnnnnnn",session)
    return (
      <div className={styles.container}>
        <Link href="/dashboard/login">
            <button className={styles.button} style={btnStyle} >Login</button>
        </Link>
        <Link href="/dashboard/register">
          <button className={styles.button} style={btnStyle} >Register</button>
        </Link>
      </div>
  )
}

export default Dashboard
