import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getdata()
{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts');

  if(!res.ok)
  {
    throw new Error('failed to fetch data');
  }
  return res.json();
}

const Blog = async() => {

  const data=await getdata();
  return (
    <div className={styles.maincontainer}>
      {data.map((item)=>
      (
        <Link href="/blog/testid" className={styles.container} key={item.id}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/13881115/pexels-photo-13881115.jpeg" alt=""  className={styles.img} width={400} height={250}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.body}</p>
          
        </div>
        </Link>
      ))}
       
        {/* <Link href="/blog/testid" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/13881115/pexels-photo-13881115.jpeg" alt=""  className={styles.img} width={400} height={250}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          
        </div>
        </Link>
        <Link href="/blog/testid" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/13881115/pexels-photo-13881115.jpeg" alt=""  className={styles.img} width={400} height={250}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          
        </div>
        </Link> */}
    </div>
  )
}

export default Blog
