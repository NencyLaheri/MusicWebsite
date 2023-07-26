"use client";
import React from "react";
import Image from "next/image";
import c1 from "public/suga.jpg";
import c2 from "public/v1.jpg";
import c3 from "public/v.jpg";
import c4 from "public/v2.jpg";
import c5 from "public/v3.jpg";
import c6 from "public/v4.jpg";
import c7 from "public/v5.jpg";
import styles from "./page.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const playlistdata=[
  {
    id:1,
    category:"Top Hits",
    items:[
      {
        img:"/v.jpg",
        name:"",
      },
    ]
  },
  {
    id:1,
    category:"Top Artists",
    items:[
      {
        img:"/v.jpg",
        name:"",
      },
    ]
  }
]
const Playlist = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className={styles.rowDiv}>
        <h1>Top Hits</h1>
          <Carousel responsive={responsive}>
          <div className={styles.carouselClass}>
            <div className={styles.imgdiv}>
            <Image src={c1}  className={styles.imgClass}/>
            </div>
            <div><p className={styles.textClass}>hello</p></div>
          </div>
        
          <div className={styles.carouselClass}>
            <div className={styles.imgdiv}>
            <Image src={c2}  className={styles.imgClass}/>
            </div>
            <div><p className={styles.textClass}>hello</p></div>
          </div>
        
          <div className={styles.carouselClass}>
            <div className={styles.imgdiv}>
            <Image src={c3}  className={styles.imgClass}/>
            </div>
            <div><p className={styles.textClass}>hello</p></div>
          </div>
        
          <div className={styles.carouselClass}>
            <div className={styles.imgdiv}>
            <Image src={c4}  className={styles.imgClass}/>
            </div>
            <div><p className={styles.textClass}>hello</p></div>
          </div>
        
          <div className={styles.carouselClass}>
            <div className={styles.imgdiv}>
            <Image src={c5}  className={styles.imgClass}/>
            </div>
            <div><p className={styles.textClass}>hello</p></div>
          </div>
        
          <div className={styles.carouselClass}>
            <div className={styles.imgdiv}>
            <Image src={c6}  className={styles.imgClass}/>
            </div>
            <div><p className={styles.textClass}>hello</p></div>
          </div>
        
          <div className={styles.carouselClass}>
            <div className={styles.imgdiv}>
            <Image src={c7}  className={styles.imgClass}/>
            </div>
            <div><p className={styles.textClass}>hello</p></div>
          </div>
        
         
         </Carousel>
          
      </div>
    </>
  );
};

export default Playlist;

