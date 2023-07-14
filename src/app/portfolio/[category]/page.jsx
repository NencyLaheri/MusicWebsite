import React from 'react'
import styles from './page.module.css'
import Button from '@/component/button/Button'
import Image from 'next/image'
import { ThemeContext } from '../../../../context/ThemeContext'

const Category = ({params}) => {

  
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.cardTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/13881115/pexels-photo-13881115.jpeg" alt="" fill={true} className={styles.img}/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/13881115/pexels-photo-13881115.jpeg" alt="" fill={true} className={styles.img}/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/13881115/pexels-photo-13881115.jpeg" alt="" fill={true} className={styles.img}/>
        </div>
      </div>
    </div>
  )
}

export default Category
