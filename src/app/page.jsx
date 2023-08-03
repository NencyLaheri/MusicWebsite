import Image from 'next/image'
// import hero from 'public/hero.png'
// import hero from 'public/record1.gif'
import hero1 from 'public/giphy.gif'
import hero from 'public/giphy1.gif'
import styles from './page.module.css'
import Button from '@/component/button/Button'
import { ToastContainer } from 'react-toastify'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>Let the music take you away.</h1>
          <p className={styles.desc}>Turning your Idea into Reality. We bring together the teams from the global Music industry. </p>
          {/* <button className={styles.btn}>See Our Works</button> */}
          <Button url="/portfolio" text="See Our Works"/>
        </div>
        <div className={styles.item}>
          <Image src={hero} alt="hero image" className={styles.img}></Image>
          {/* <Image src={hero1} alt="hero image" className={styles.overlay} ></Image> */}
        </div>
      </div>
   </>
  )
}
