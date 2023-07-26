"use client"
import React, { useContext } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'
import { dataEvent } from '../../page' 
import { useParams } from 'next/navigation';


const BlogPost = () => {

  console.log("dataBlog>>>>>>>>........",dataEvent)
  const router =useParams();
  console.log("router data---->>>>>>",router.category)
  const categoryData=dataEvent?.find((item)=>item.category==router.category);
  console.log("categoryyyyyyyyyy--------",categoryData)
  const data=categoryData.items.find((item)=>item.id==router.id)
  console.log("dataaaaaaaaaaaa--->>",data)
  const { toggle,mode } =useContext(ThemeContext) 
  const textStyle={
    color:mode=="dark" ? "grey" : "black",

  }
  return (
    <div className={styles.container} style={textStyle}>
      <div className={styles.top}>
        
        <div className={styles.imageContainer}>
          {/* <Image src="https://images.pexels.com/photos/13881115/pexels-photo-13881115.jpeg" alt="" fill={true} className={styles.image}/> */}
          <video controls autoPlay loop muted  className={styles.image}><source src={data.video} type='video/mp4'/></video>
        </div>
        
      </div>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
              {data.title}
          </h1>
          <div className={styles.author}>
              <Image src={data.personImg} width={40} height={40} className={styles.avatar}/>
              <span className={styles.username}>Jogn Doe</span>
          </div>
        </div>
          <p className={styles.text} className={styles.desc}>
          {data.longDesc}
          </p>
      </div>
    </div>
  )
}

export default BlogPost