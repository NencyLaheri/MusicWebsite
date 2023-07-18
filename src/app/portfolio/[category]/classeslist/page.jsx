import React from 'react'

const ClassesList = () => {
  const data=[
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
  return (
    <div>
     <h1>{data[0].id}</h1>
     <h1>{data[0].details}</h1>
     <video controls autoPlay loop muted width="750" height="500"><source src={data[0].video} type='video/mp4'/></video>
    </div>
  )
}

export default ClassesList
