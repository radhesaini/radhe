import { Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
const YoutubeCard = (props) => {
    const {url, image, title} = props;
  return (
   <div className="youtubeCard">
    {/* <embed src={`${url}`} type="video" width="540" height="310" allowfullscreen/> */}
    <iframe width="560" height="315" 
    src={`${url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe>
    <Link href={url} target="_blank">
        {/* <img src={image} alt="vid"> </img> */}
        <Typography>{title}</Typography>
    </Link>
   </div>
  )
}

export default YoutubeCard