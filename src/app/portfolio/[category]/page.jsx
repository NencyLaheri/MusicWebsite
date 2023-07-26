import React from 'react'
import styles from './page.module.css'
import Button from '@/component/button/Button'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

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
          video:"/guitar.webm",
          teachers:[
            {
              id:1,
              image:'/jimin1.jpg',
              name:'Park Jimin',
              qualification:"Western music",
              detail:"Our Online Hindi Popular & Film Music Course covers the essential training elements of Hindustani Classical Music, "
            },
            {
              id:2,
              image:'/v3.jpg',
              name:'Kim Taehyung',
              qualification:"",
              qualification:"Western music",
              detail:"Our Online Hindi Popular & Film Music Course covers the essential training elements of Hindustani Classical Music, "
            },
            {
              id:3,
              image:'/kook.jpg',
              name:'Jeon Jungkook',
              qualification:"",
              qualification:"Western music",
              detail:"Our Online Hindi Popular & Film Music Course covers the essential training elements of Hindustani Classical Music, "
            },
          ],
          plans:[
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
              plan:"Standard",
              duration:"8 Classes / Month",
              price:"₹ 5600",
              d1:"Beginner Lessons",
              d2:"8 Online Classes",
              d3:"60 min / Class",
              d4:"Regional / English Instructions",
            },
            {
              plan:"Most-Selling",
              duration:"12 Classes / Quarter",
              price:"₹ 9600",
              d1:"Beginner Lessons",
              d2:"12 Online Classes",
              d3:"60 min / Class",
              d4:"Regional / English Instructions",
            },
            {
              plan:"Value-Pack",
              duration:"48 Classes",
              price:"₹ 39999",
              d1:"Beginner Lessons",
              d2:"48 Online Classes",
              d3:"60 min / Class",
              d4:"Classes can be split among family & friends",
            },
          ]
        },
        {
            id:2,
          title:"Drums",
          video:"/drums.mp4",
          teachers:[
            {
              id:1,
              image:'/kook.jpg',
              name:'Jeon Jungkook',
              qualification:"Western music",
              detail:"Our Online Hindi Popular & Film Music Course covers the essential training elements of Hindustani Classical Music, "
            },
            {
              id:2,
              image:'/jin.jpg',
              name:'Kim Seokjin',
              qualification:"",
              qualification:"Western music",
              detail:"Our Online Hindi Popular & Film Music Course covers the essential training elements of Hindustani Classical Music, "
            },
            {
              id:3,
              image:'/v1.jpg',
              name:'Kim Taehyung',
              qualification:"",
              qualification:"Western music",
              detail:"Our Online Hindi Popular & Film Music Course covers the essential training elements of Hindustani Classical Music, "
            },
          ],
          plans:[
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
        },
        {
            id:3,
          title:"Violin",
          video:"/violin.mp4",
          teachers:[
            {
              id:1,
              image:'/rm.jpg',
              name:'Kim Namjoon',
              qualification:"Western music",
              detail:"Our Online Hindi Popular & Film Music Course covers the essential training elements of Hindustani Classical Music, "
            },
            {
              id:2,
              image:'/jhope.jpg',
              name:'Jung Hoseok',
              qualification:"",
              qualification:"Western music",
              detail:"Our Online Hindi Popular & Film Music Course covers the essential training elements of Hindustani Classical Music, "
            },
            {
              id:3,
              image:'/suga.jpg',
              name:'Min Yoongi',
              qualification:"",
              qualification:"Western music",
              detail:"Our Online Hindi Popular & Film Music Course covers the essential training elements of Hindustani Classical Music, "
            },
          ],
          plans:[
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
        },
        {
            id:4,
            title:"Tabla",
            video:"/tabla.mp4",
            teachers:[
              {
                id:1,
                image:'/v4.jpg',
                name:'Kim Taehyung',
                qualification:"Western music",
                detail:"Our Online Hindi Popular & Film Music Course covers the essential training elements of Hindustani Classical Music, "
              },
              {
                id:2,
                image:'/jimin1.jpg',
                name:'Park Jimin',
                qualification:"",
                qualification:"Western music",
                detail:"Our Online Hindi Popular & Film Music Course covers the essential training elements of Hindustani Classical Music, "
              },
              {
                id:3,
                image:'/v5.jpg',
                name:'Kim Taehyung',
                qualification:"",
                qualification:"Western music",
                detail:"Our Online Hindi Popular & Film Music Course covers the essential training elements of Hindustani Classical Music, "
              },
            ],
            plans:[
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