"use client"
import React, { useContext } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { ThemeContext } from '../../../../context/ThemeContext'

const BlogPost = () => {

  const { toggle,mode } =useContext(ThemeContext) 
  const textStyle={
    color:mode=="dark" ? "grey" : "black",

  }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
           industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className={styles.author}>
            <Image src="https://images.pexels.com/photos/13881115/pexels-photo-13881115.jpeg" width={40} height={40} className={styles.avatar}/>
            <span className={styles.username}>Jogn Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/13881115/pexels-photo-13881115.jpeg" alt="" fill={true} className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
          <p className={styles.text} style={textStyle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
           industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
             leap into electronic typesetting, remaining essentially unchanged.
              <br /><br />
              simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
           industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
              <br /><br />
              simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
           industry's standard dummy text ever since the 1500.
           It was popularised in the 1960s 
             with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum
              It was popularised in the 1960s 
             with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum
              It was popularised in the 1960s 
             with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum
              It was popularised in the 1960s 
             with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum

          </p>
      </div>
    </div>
  )
}

export default BlogPost
