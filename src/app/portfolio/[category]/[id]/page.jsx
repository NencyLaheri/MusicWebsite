"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { data } from '../page';
import { useParams } from 'next/navigation';
import styles from './page.module.css'
import Button from '@/component/button/Button';
import Image from 'next/image';
import p1 from '/public/person.webp'
import { BiCheckCircle } from 'react-icons/bi'
 

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

const FeesDetails=[
  
    {
      plan:"Basic",
      duration:"4 Classes / Month",
      price:"₹ 3600",
      d1:"Beginner Lessons",
      d2:"4 Online Classes",
      d3:"60 min / Class",
      d4:"Regional / English Instructions",
    },
    {
      plan:"Basic",
      duration:"4 Classes / Month",
      price:"₹ 3600",
      d1:"Beginner Lessons",
      d2:"4 Online Classes",
      d3:"60 min / Class",
      d4:"Regional / English Instructions",
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
                {categoryItem.teachers.map((item=>(
                    <div className={styles.teacherCard}> 
                    <Image src={item.image} alt="Avatar" className={styles.img} width="290" height="290"/>
                      <div className={styles.details}>
                          <h1>{item.name}</h1>
                          <h3>{item.qualification}</h3>
                          <p>{item.detail}</p>
                      </div>
                    </div>
                  )))
                } 
            </div>
        </div>
        : ""
    }

    <div className={styles.FeesClass}> 
      <h1>Fees For Courses</h1>
     <div className={styles.feesdetails}>
      {categoryItem.plans.map((item)=>(
            <div className={styles.feeCard}>
              <div><p className={styles.f1Class}>{item.plan}</p></div>
              <div><p>{item.duration}</p></div>
              <div><h1>{item.price}</h1></div>
              <div className={styles.dtl}>
                <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>{item.d1}</span></div>
                <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>{item.d2}</span></div>
                <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>{item.d3}</span></div>
                <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>{item.d4}</span></div>
              </div>
              <div className={styles.btnDiv}><button className={styles.buttonClass}>Get Started</button></div>
          </div>
      ))}
        
        {/* <div className={styles.feeCard}>
          <p>Basic</p>
          <p>4 Classes/Month</p>
          <h1>&#8377; 3600</h1>
          <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>Beginner Lessons</span></div>
          <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>4 Online Classes</span></div>
          <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>60 min / Class</span></div>
          <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>Regional / English Instructions</span></div>
          <button className={styles.buttonClass}>Get Started</button>
        </div>
        <div className={styles.feeCard}>
          <p>Basic</p>
          <p>4 Classes/Month</p>
          <h1>&#8377; 3600</h1>
          <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>Beginner Lessons</span></div>
          <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>4 Online Classes</span></div>
          <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>60 min / Class</span></div>
          <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>Regional / English Instructions</span></div>
          <button className={styles.buttonClass}>Get Started</button>
        </div>
        <div className={styles.feeCard}>
          <p>Basic</p>
          <p>4 Classes/Month</p>
          <h1>&#8377; 3600</h1>
          <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>Beginner Lessons</span></div>
          <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>4 Online Classes</span></div>
          <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>60 min / Class</span></div>
          <div className={styles.detaildiv}><span><BiCheckCircle style={{fontSize:"20px"}}/></span><span>Regional / English Instructions</span></div>
          <button className={styles.buttonClass}>Get Started</button>
        </div> */}

      </div>
    </div>

    </div>
    </>
  )
}

export default Id

