"use client"
import  {React, useState} from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import bgimage from "public/bgimage.png";
// import bgvideo from 'public/bgvideo.mp4'

export const dataEvent=[
 {
    category:"Events",
    items:[
    {
      id:1,
      title:"live cafe event 1",
      video:"/le1.mp4",
      body:"sbnfdjas sjdfnsdjfsm fsdfnjkdsfn fsjkfdnsjdfnj",
      shortDes:`Music is made up of melody, phrasings and harmony. When it comes to the voice – as an instrument the melody line in a song refers to the lead and harmony refers to the complementary line to the lead line. Melody and harmony are closely intertwined in music. `,
      personImg:"/kook.jpg",
      longDesc:`Harmony in music refers to the mixing of different pitches or notes performed or sung at the same time. It is concerned
      with the vertical component of music, in which numerous voices or instruments combine to produce a pleasant and coordinated sound.
      Chords, which are formed by stacking notes at particular intervals, are the foundation of harmony. The triad is the most frequent
      sort of chord, consisting of three notes: the root, the third, and the fifth. These sounds provide the fundamental harmonic basis. 
      Extended chords, such as seventh and ninth chords, include extra notes to produce richer and more intricate harmonies.    
      Harmony allows musicians and composers to explore and experiment with different combinations of sounds and chords. It opens up 
      a vast array of creative possibilities, enabling the creation of unique and expressive compositions. Harmonic variations, chord 
      progressions, and harmonic embellishments contribute to the richness and diversity of musical styles and genres.
      Harmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to blend together 
      harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate and captivating
      musical dialogues.\nHarmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to 
      blend together harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate 
      and captivating musical dialogues.`
    },
    {
      id:2,
      title:"live cafe event 2",
      video:"/dualipa.mp4",
      body:"sbnfdjas sjdfnsdjfsm fsdfnjkdsfn fsjkfdnsjdfnj",
      shortDes:`Music is made up of melody, phrasings and harmony. When it comes to the voice – as an instrument the melody line in a song refers to the lead and harmony refers to the complementary line to the lead line. Melody and harmony are closely intertwined in music. `,
      personImg:"/jungkook.jpg",
      longDesc:`Harmony in music refers to the mixing of different pitches or notes performed or sung at the same time. It is concerned
      with the vertical component of music, in which numerous voices or instruments combine to produce a pleasant and coordinated sound.
      Chords, which are formed by stacking notes at particular intervals, are the foundation of harmony. The triad is the most frequent
      sort of chord, consisting of three notes: the root, the third, and the fifth. These sounds provide the fundamental harmonic basis. 
      Extended chords, such as seventh and ninth chords, include extra notes to produce richer and more intricate harmonies.    
      Harmony allows musicians and composers to explore and experiment with different combinations of sounds and chords. It opens up 
      a vast array of creative possibilities, enabling the creation of unique and expressive compositions. Harmonic variations, chord 
      progressions, and harmonic embellishments contribute to the richness and diversity of musical styles and genres.
      Harmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to blend together 
      harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate and captivating
      musical dialogues.\nHarmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to 
      blend together harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate 
      and captivating musical dialogues.`
    },
    {
      id:3,
      title:"live cafe event 3",
      video:"/btevent.mp4",
      body:"sbnfdjas sjdfnsdjfsm fsdfnjkdsfn fsjkfdnsjdfnj",
      shortDes:`Music is made up of melody, phrasings and harmony. When it comes to the voice – as an instrument the melody line in a song refers to the lead and harmony refers to the complementary line to the lead line. Melody and harmony are closely intertwined in music. `,
      personImg:"/rm.jpg",
      longDesc:`Harmony in music refers to the mixing of different pitches or notes performed or sung at the same time. It is concerned
      with the vertical component of music, in which numerous voices or instruments combine to produce a pleasant and coordinated sound.
      Chords, which are formed by stacking notes at particular intervals, are the foundation of harmony. The triad is the most frequent
      sort of chord, consisting of three notes: the root, the third, and the fifth. These sounds provide the fundamental harmonic basis. 
      Extended chords, such as seventh and ninth chords, include extra notes to produce richer and more intricate harmonies.    
      Harmony allows musicians and composers to explore and experiment with different combinations of sounds and chords. It opens up 
      a vast array of creative possibilities, enabling the creation of unique and expressive compositions. Harmonic variations, chord 
      progressions, and harmonic embellishments contribute to the richness and diversity of musical styles and genres.
      Harmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to blend together 
      harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate and captivating
      musical dialogues.\nHarmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to 
      blend together harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate 
      and captivating musical dialogues.`
    },
    {
      id:4,
      title:"live cafe event 4",
      video:"/le2.mp4",
      body:"sbnfdjas sjdfnsdjfsm fsdfnjkdsfn fsjkfdnsjdfnj",
      shortDes:`Music is made up of melody, phrasings and harmony. When it comes to the voice – as an instrument the melody line in a song refers to the lead and harmony refers to the complementary line to the lead line. Melody and harmony are closely intertwined in music. `,
      personImg:"/v1.jpg",
      longDesc:`Harmony in music refers to the mixing of different pitches or notes performed or sung at the same time. It is concerned
      with the vertical component of music, in which numerous voices or instruments combine to produce a pleasant and coordinated sound.
      Chords, which are formed by stacking notes at particular intervals, are the foundation of harmony. The triad is the most frequent
      sort of chord, consisting of three notes: the root, the third, and the fifth. These sounds provide the fundamental harmonic basis. 
      Extended chords, such as seventh and ninth chords, include extra notes to produce richer and more intricate harmonies.    
      Harmony allows musicians and composers to explore and experiment with different combinations of sounds and chords. It opens up 
      a vast array of creative possibilities, enabling the creation of unique and expressive compositions. Harmonic variations, chord 
      progressions, and harmonic embellishments contribute to the richness and diversity of musical styles and genres.
      Harmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to blend together 
      harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate and captivating
      musical dialogues.\nHarmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to 
      blend together harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate 
      and captivating musical dialogues.`
    },]
},
{
  category:"Blog",
  items:[
    {
      id:1,
      title:"Gamakas",
      video:"/bv1.mp4",
      body:"sbnfdjas sjdfnsdjfsm fsdfnjkdsfn fsjkfdnsjdfnj",
      shortDes:`Music is made up of melody, phrasings and harmony. When it comes to the voice – as an instrument the melody line in a song refers to the lead and harmony refers to the complementary line to the lead line. Melody and harmony are closely intertwined in music. `,
      personImg:"/kook.jpg",
      longDesc:`Harmony in music refers to the mixing of different pitches or notes performed or sung at the same time. It is concerned
       with the vertical component of music, in which numerous voices or instruments combine to produce a pleasant and coordinated sound.
      Chords, which are formed by stacking notes at particular intervals, are the foundation of harmony. The triad is the most frequent
       sort of chord, consisting of three notes: the root, the third, and the fifth. These sounds provide the fundamental harmonic basis. 
       Extended chords, such as seventh and ninth chords, include extra notes to produce richer and more intricate harmonies.    
      Harmony allows musicians and composers to explore and experiment with different combinations of sounds and chords. It opens up 
      a vast array of creative possibilities, enabling the creation of unique and expressive compositions. Harmonic variations, chord 
      progressions, and harmonic embellishments contribute to the richness and diversity of musical styles and genres.
      Harmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to blend together 
      harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate and captivating
       musical dialogues.\nHarmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to 
       blend together harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate 
       and captivating musical dialogues.`
    },
    {
      id:2,
      title:"Blog 2",
      video:"/bv2.mp4",
      body:"sbnfdjas sjdfnsdjfsm fsdfnjkdsfn fsjkfdnsjdfnj",
      shortDes:`Music is made up of melody, phrasings and harmony. When it comes to the voice – as an instrument the melody line in a song refers to the lead and harmony refers to the complementary line to the lead line. Melody and harmony are closely intertwined in music. `,
      personImg:"/kook.jpg",
      longDesc:`Harmony in music refers to the mixing of different pitches or notes performed or sung at the same time. It is concerned
       with the vertical component of music, in which numerous voices or instruments combine to produce a pleasant and coordinated sound.
      Chords, which are formed by stacking notes at particular intervals, are the foundation of harmony. The triad is the most frequent
       sort of chord, consisting of three notes: the root, the third, and the fifth. These sounds provide the fundamental harmonic basis. 
       Extended chords, such as seventh and ninth chords, include extra notes to produce richer and more intricate harmonies.    
      Harmony allows musicians and composers to explore and experiment with different combinations of sounds and chords. It opens up 
      a vast array of creative possibilities, enabling the creation of unique and expressive compositions. Harmonic variations, chord 
      progressions, and harmonic embellishments contribute to the richness and diversity of musical styles and genres.
      Harmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to blend together 
      harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate and captivating
       musical dialogues.\nHarmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to 
       blend together harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate 
       and captivating musical dialogues.`
    },
    {
      id:3,
      title:"Blog 3",
      video:"/bv3.mp4",
      body:"sbnfdjas sjdfnsdjfsm fsdfnjkdsfn fsjkfdnsjdfnj",
      shortDes:`Music is made up of melody, phrasings and harmony. When it comes to the voice – as an instrument the melody line in a song refers to the lead and harmony refers to the complementary line to the lead line. Melody and harmony are closely intertwined in music. `,
      personImg:"/kook.jpg",
      longDesc:`Harmony in music refers to the mixing of different pitches or notes performed or sung at the same time. It is concerned
       with the vertical component of music, in which numerous voices or instruments combine to produce a pleasant and coordinated sound.
      Chords, which are formed by stacking notes at particular intervals, are the foundation of harmony. The triad is the most frequent
       sort of chord, consisting of three notes: the root, the third, and the fifth. These sounds provide the fundamental harmonic basis. 
       Extended chords, such as seventh and ninth chords, include extra notes to produce richer and more intricate harmonies.    
      Harmony allows musicians and composers to explore and experiment with different combinations of sounds and chords. It opens up 
      a vast array of creative possibilities, enabling the creation of unique and expressive compositions. Harmonic variations, chord 
      progressions, and harmonic embellishments contribute to the richness and diversity of musical styles and genres.
      Harmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to blend together 
      harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate and captivating
       musical dialogues.\nHarmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to 
       blend together harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate 
       and captivating musical dialogues.`
    },
    {
      id:4,
      title:"Blog 4",
      video:"/bv4.mp4",
      body:"sbnfdjas sjdfnsdjfsm fsdfnjkdsfn fsjkfdnsjdfnj",
      shortDes:`Music is made up of melody, phrasings and harmony. When it comes to the voice – as an instrument the melody line in a song refers to the lead and harmony refers to the complementary line to the lead line. Melody and harmony are closely intertwined in music. `,
      personImg:"/kook.jpg",
      longDesc:`Harmony in music refers to the mixing of different pitches or notes performed or sung at the same time. It is concerned
       with the vertical component of music, in which numerous voices or instruments combine to produce a pleasant and coordinated sound.
      Chords, which are formed by stacking notes at particular intervals, are the foundation of harmony. The triad is the most frequent
       sort of chord, consisting of three notes: the root, the third, and the fifth. These sounds provide the fundamental harmonic basis. 
       Extended chords, such as seventh and ninth chords, include extra notes to produce richer and more intricate harmonies.    
      Harmony allows musicians and composers to explore and experiment with different combinations of sounds and chords. It opens up 
      a vast array of creative possibilities, enabling the creation of unique and expressive compositions. Harmonic variations, chord 
      progressions, and harmonic embellishments contribute to the richness and diversity of musical styles and genres.
      Harmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to blend together 
      harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate and captivating
       musical dialogues.\nHarmony facilitates musical collaboration and ensemble playing. It allows multiple instruments or voices to 
       blend together harmoniously, creating a unified and cohesive sound. Harmonic interactions between musicians can lead to intricate 
       and captivating musical dialogues.`
    },
  ]
}
]
export const dataBlog=[
  
]

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

async function getdata() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const i = "/bgvideo.mp4";

  const data = getdata();
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.imgContainer}>
          <Image src={bgimage} alt="Background Image" className={styles.imageClass}/>
          {/* <video controls autoPlay loop muted width="1250" height="500"><source src={i} type='video/mp4'/></video> */}
        </div>
        <div className={styles.secContainer}>
          <div className={styles.btnDivClass}>
           
           
            <Tabs className={styles.tabs}>
              <TabList className={styles.tabList}>
                <Tab className={styles.tabClass}>Event</Tab>
                <Tab className={styles.tabClass}>Blog</Tab>
              </TabList>

              <TabPanel className={styles.tabpanel}>
                <div className={styles.videoContainer}>
                  {dataEvent[0].items.map((item) => (
                    <Link href={`/blog/Events/${item.id}`} className={styles.container} key={item.id} >
                      <div className={styles.imgContainer}>
                        {/* <Image src="https://images.pexels.com/photos/13881115/pexels-photo-13881115.jpeg" alt="" className={styles.img} width={400} height={250}/> */}
                        <video controls autoPlay loop muted width="750" height="500"><source src={item.video} type='video/mp4'/></video>
                      </div>
                      <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.body}</p>
                      </div>
                    </Link>
                  ))}
                </div>  
              </TabPanel>

              <TabPanel>
                <div className={styles.videoContainer}>
                    {dataEvent[1].items.map((item) => (
                      <Link
                        href={`/blog/Blog/${item.id}`} className={styles.container} key={item.id} 
                        className={styles.container}
                        key={item.id}
                      >
                        <div className={styles.imgContainer}>
                          {/* <Image
                            src="https://images.pexels.com/photos/13881115/pexels-photo-13881115.jpeg"
                            alt=""
                            className={styles.img}
                            width={400}
                            height={250}
                          /> */}
                        <video controls autoPlay loop muted width="750" height="500"><source src={item.video} type='video/mp4'/></video>

                        </div>
                        <div className={styles.content}>
                          <h1 className={styles.title}>{item.title}</h1>
                          <p className={styles.desc}>{item.body}</p>
                        </div>
                      </Link>
                    ))}
                  </div>  
              </TabPanel>

            </Tabs>
          </div>
         
        </div>
      </div>
    </>

    // <div className={styles.maincontainer}>
    //   {data.map((item)=>
    //   (
    //     <Link href="/blog/testid" className={styles.container} key={item.id}>
    //     <div className={styles.imgContainer}>
    //       <Image src="https://images.pexels.com/photos/13881115/pexels-photo-13881115.jpeg" alt=""  className={styles.img} width={400} height={250}/>
    //     </div>
    //     <div className={styles.content}>
    //       <h1 className={styles.title}>{item.title}</h1>
    //       <p className={styles.desc}>{item.body}</p>

    //     </div>
    //     </Link>
    //   ))}

    // </div>
  );
};

export default Blog;
