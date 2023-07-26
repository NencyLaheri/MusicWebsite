import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/component/button/Button'
import aboutimg from 'public/giphy5.gif'


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {/* <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 " fill={true} alt='' className={styles.img}/> */}
        <Image src={aboutimg} fill={true} alt='' className={styles.img}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgtitle}>Digital Storytellers</h1>
          <h2 className={styles.imgdesc}>Handcrafting award winning  digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
          <div className={styles.item}>
            <h1 className={styles.title}>Who Are We?</h1>
            <p className={styles.desc}>Music School is dedicated to bringing quality music education to the community. 
            We provide specialized music lessons for both kids and adults, beginners, intermediates and advanced musicians.
             We believe that the study of music enriches the life of each student and contributes in development of coordination, 
             self-discipline and provides a lifetime of enjoyment.
              <br />
              <br />
              we provide our students with opportunity for one-on-one sessions with trained music educators aimed at developing their
               creativity as well as group sessions focused on developing their social skills and confidence. Our music teachers
                encourage students to learn music via a combination of ear trainning and theory which enhances their proficiency. </p>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>What We Do?</h1>
            <p className={styles.desc}>Our educators are highly qualified professionals dedicated to bringing out the best in our students.
             With years of training, performance and teaching experience their expertise makes learning music easier, more enjoyable and fun!
              Creative Illustrations
              <br />
              <br /> - EXPERIENCED AND QUALIFIED EDUCATORS
              <br />
              <br /> - RECOGNIZED AND WELL-DEFINED CURRICULUM
              <br />
              <br /> - FOCUS ON OVERALL DEVELOPMENT </p>
              <Button url="/contact" text="Contact"/>
          </div>
      </div>
    </div>
  )
}

export default About
