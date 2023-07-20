import React from 'react'
import styles from './page.module.css'
import Button from '@/component/button/Button'
import Image from 'next/image'
import { ThemeContext } from '../../../../context/ThemeContext'

export const data=[
    {
      category:"Classes",
      items:[
        {
          id:1,
          title:"Music School",
          video:"/v2.mp4"
        },
        {
          id:2,
          title:"J.M.B Music Class",
          video:"/v3.mp4"
        },
        {
            id:3,
            title:"Sarang Sangeet Sadhana",
            video:"/v4.mp4"
        },
        {
            id:4,
          title:"Carnatic Vocals",
          video:"/v5.mp4"
        },
      ]
    },
    {
      category:"Instruments",
      items:[
        {
            id:1,
          title:"Guitar",
          video:"/guitar.webm"
        },
        {
            id:2,
          title:"Drums",
          video:"/drums.mp4"
        },
        {
            id:3,
          title:"Violin",
          video:"/violin.mp4"
        },
        {
            id:4,
          title:"Tabla",
          video:"/tabla.mp4"
        },
        
        
      ]
    },
    {
      category:"Events",
      items:[
        {
            id:1,
          title:" Live Cafe Event",
          video:"/le1.mp4"
        },
        {
            id:2,
          title:"Live Cafe Event",
          video:"/dualipa.mp4"
        },
        {
            id:3,
          title:"BTS Event",
          video:"/btevent.mp4"
        },
        {
            id:4,
          title:"Live Event",
          video:"/le2.mp4"
        },
      ]
    },
  ]
  

const Category = ({params}) => {
 
  // console.log(params)
  const categoryData=data.find((item)=>item.category===params.category);
  // console.log("categorydataaaaaaaaaaa",categoryData)
  if(!categoryData)
  {
    return(<div>No data Available For this category</div>)
  }
  return (  
    <div className={styles.container}>
      <h1 className={styles.cardTitle}>{params.category}</h1>
      {categoryData.items.map((item,index)=>(
        <div key={item.title} className={styles.item}>
          <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url={`/portfolio/${params.category}/${item.id}`}/>
          </div>
          <div className={styles.imgContainer}>
            <video controls autoPlay loop muted width="750" height="500"><source src={item.video} type='video/mp4'/></video>
          </div>
        </div>
      ))}
      {/* <div className={styles.item}>
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
      </div> */}
    </div>
  )
}

export default Category