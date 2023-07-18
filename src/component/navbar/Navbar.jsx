"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import DarkModeToggle from '../darkmodetoggle/DarkModeToggle'
import { ThemeContext } from '../../../context/ThemeContext'


const links=[
    {
        id:1,
        title:'Home',
        url:"/",
    },
    {
        id:2,
        title:'About',
        url:"/about",
    },
    {
        id:3,
        title:'Portfolio',
        url:"/portfolio",
       
    },
    {
        id:4,
        title:'Blog',
        url:"/blog",
       
       
    },
    {
        id:5,
        title:'Playlist',
        url:"/playlist",
       
       
    },
    {
        id:6,
        title:'Contact',
        url:"/contact",
        
    },
    {
        id:7,
        title:'Dashboard',
        url:"/dashboard",
    },
    
]

const Navbar = () => {

  const { toggle,mode } =useContext(ThemeContext) 
  const btnStyle={
    color:mode=="dark" ? "white" : "black",
    
  }
  return (
    <div className={styles.container}>
            
            <Link href="/" className={styles.logo}>ihearRadio</Link>
            
            <div className={styles.links}>
            <DarkModeToggle/>
            {
            
            links.map((item)=>
            {
                return(
                    <Link href={item.url} className={styles.link}>{item.title}</Link>                
                )
            })
        }
        <button onClick={()=>{console.log("logged out")}} className={styles.logoutbtn} style={btnStyle}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
