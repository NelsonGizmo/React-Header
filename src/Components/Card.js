import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <img src={props.img_path} alt='' width={400} height={300}/>
        <p>Phone Num: {props.contact}</p>
        <p>{props.url}</p>

    
    
    </div>
  )
}

export default Card