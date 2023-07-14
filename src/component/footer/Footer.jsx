"use client"
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
//   console.log("hello world")
  return (
    <div className={styles.container}>
      <div>@2023 Lamamia. All rights reserved.</div>
    
      <div className={styles.social}>
        <a href="https://www.facebook.com/">
          <Image src="/1.png" alt='lll'  width={15} height={15} className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/">
        <Image src="/2.png" alt='lll'  width={15} height={15} className={styles.icon}/>
        </a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den">
        <Image src="/3.png" alt='lll'  width={15} height={15} className={styles.icon}/>
        </a>
        <a href="https://www.youtube.com/">
        <Image src="/4.png" alt='lll'  width={15} height={15} className={styles.icon}/>
        </a>
      </div>
     
    </div>
  )
}

export default Footer
