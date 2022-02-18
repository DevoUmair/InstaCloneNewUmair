import React from 'react'
import './post.css'
import {Avatar} from '@mui/material';

function  Post(props) {
  return (
    <div className='post' key={props.key}> 
        <div className='post-header'>
        <Avatar src={props.userImage} className='Post_Avatar'/>
            <div className='details'>
                 <h3>{props.UserName}</h3>
                 <p>{props.date}</p>
            </div>
            
        </div>
        <img className='post-image' src={props.ImgaeUrl}></img>
        <h4 className='post-text'><strong>{props.UserName} </strong>{props.caption}</h4>
    </div>
  )
}

export default  Post