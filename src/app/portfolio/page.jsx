import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import cimg from 'public/classes.gif'
import eimg from 'public/events.gif'
import iimg from 'public/instruments.webp'
import pimg from 'public/playlist2.gif'
 
const Portfolio = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.selectTitle}>Choose a Gallary</h1>
        <div className={styles.items}>
          <div className={styles.itemdiv}>
            <Link href="/portfolio/Classes" className={styles.item}>
              <Image src={cimg} fill={true} className={styles.img}/>
              {/* <span className={styles.title}>Classes</span> */}
            </Link>
            <h1 className={styles.h1tag}><a href="/portfolio/Classes">Classes</a> </h1>
          </div>
          <div className={styles.itemdiv}>
            <Link href="/portfolio/Instruments" className={styles.item}>
            <Image src={iimg} fill={true} className={styles.img}/>
              {/* <span className={styles.title}>Instruments</span> */}
            </Link>
            <h1 className={styles.h1tag}><a href="/portfolio/Instruments">Instruments</a></h1>
          </div>
          <div className={styles.itemdiv}>
            <Link href="/portfolio/Events" className={styles.item}>
              <Image src={eimg} fill={true} className={styles.img}/>
              {/* <span className={styles.title}>Events</span> */}
            </Link>
            <h1 className={styles.h1tag}><a href="/portfolio/Events"> Events</a></h1>
          </div>
          {/* <div className={styles.itemdiv}>
            <Link href="/portfolio/Playlists" className={styles.item}>
              <Image src={pimg} fill={true} className={styles.img}/>
              {/* <span className={styles.title}>Events</span> */}
            {/* </Link>
            <h1 className={styles.h1tag}><a href="/portfolio/Playlists"> Playlists</a></h1>
          </div> */} 
          
        </div>
    </div>
  )
}

export default Portfolio
