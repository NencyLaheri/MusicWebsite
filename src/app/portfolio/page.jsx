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
            <Link href="/portfolio/illustrations" className={styles.item}>
              <Image src={cimg} fill={true} className={styles.img}/>
              {/* <span className={styles.title}>Classes</span> */}
            </Link>
            <h1 className={styles.h1tag}><a href="/portfolio/illustrations">Classes</a> </h1>
          </div>
          <div className={styles.itemdiv}>
            <Link href="/portfolio/websites" className={styles.item}>
            <Image src={iimg} fill={true} className={styles.img}/>
              {/* <span className={styles.title}>Instruments</span> */}
            </Link>
            <h1 className={styles.h1tag}><a href="/portfolio/websites">Instruments</a></h1>
          </div>
          <div className={styles.itemdiv}>
            <Link href="/portfolio/application" className={styles.item}>
              <Image src={eimg} fill={true} className={styles.img}/>
              {/* <span className={styles.title}>Events</span> */}
            </Link>
            <h1 className={styles.h1tag}><a href="/portfolio/application"> Events</a></h1>
          </div>
          <div className={styles.itemdiv}>
            <Link href="/portfolio/playlists" className={styles.item}>
              <Image src={pimg} fill={true} className={styles.img}/>
              {/* <span className={styles.title}>Events</span> */}
            </Link>
            <h1 className={styles.h1tag}><a href="/portfolio/application"> Playlists</a></h1>
          </div>
          
        </div>
    </div>
  )
}

export default Portfolio
