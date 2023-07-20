"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { data } from '../page';
import { useParams } from 'next/navigation';
import styles from './page.module.css'
import Button from '@/component/button/Button';
import Image from 'next/image';
import p1 from '/public/person.webp'


const Id = () => {
  const data1=[
    {
      id:1,
      details:"adsad dfsdf fddfd f",
      video:"/v2.mp4",
    },
    {
      id:2,
      details:"adsad dfsdf fddfd f",
      video:"/v2.mp4",
    },
    {
      id:3,
      details:"adsad dfsdf fddfd f",
      video:"/v2.mp4",
    },
    {
      id:4,
      details:"adsad dfsdf fddfd f",
      video:"/v2.mp4",
    },
  ]

  console.log("dataaaaaaaaaaaaaaa",data);

  const router =useParams();

  console.log("router castegoryyyyyy",router.category)
  console.log("routerrrrrr id-->>",router.id);

  const categoryData=data.find((item)=>item.category===router.category);

  console.log("categoryData------>",categoryData.items)

  const categoryItem = categoryData.items.find((item)=> item.id == router.id)   
  console.log("itemdata->>>>>>>",categoryItem)
  
  return (
    <>
   <div className={styles.maindiv}>
    <div className={styles.divcontainer}>
     {/* <h1>{categoryData.items.}</h1> */}
        <video controls autoPlay loop muted width="750" height="500"><source src={categoryItem.video} type='video/mp4'/></video>
        <div className={styles.rdiv}>
            <h1>{categoryItem.title}</h1>
            <p className={styles.desc}>Searching for best hindustani music classes near me? Learn classical hindustani vocals from qualified Hindustani music teachers.</p>
            <Button text="Book Now" url="#"/>
        </div>
    </div>
    {router.category=="Instruments" ?
        <div className={styles.tdiv}>
            <h1 className={styles.theading}>Teachers</h1>
            <div className={styles.teachers}>
                <div className={styles.card}>
                    <Image src={p1} alt="Avatar" style={styles.img} fill={true}/>
                    <div class="container">
                        <h4><b>John Doe</b></h4> 
                        <p>Architect & Engineer</p> 
                    </div>
                </div>
                <div className={styles.card}>
                    <Image src={p1} alt="Avatar" style={styles.img} fill={true}/>
                    <div class="container">
                        <h4><b>John Doe</b></h4> 
                        <p>Architect & Engineer</p> 
                    </div>
                </div>
                <div className={styles.card}>
                    <Image src={p1} alt="Avatar" style={styles.img} fill={true}/>
                    <div class="container">
                        <h4><b>John Doe</b></h4> 
                        <p>Architect & Engineer</p> 
                    </div>
                </div>
                
            </div>
        </div>
        : ""
    }
    

    </div>
    </>
  )
}

export default Id

