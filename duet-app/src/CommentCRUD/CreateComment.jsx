import React from "react"
import axios from "axios"
import { useState } from 'react'

export default function CreateComment () {
 
  const [content, setContent ] = useState('')
  const [comment, setComment ]= useState('hello world')
  

  const handleChange = (e) => {
    setContent({ ...content, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (event, content) => {
    event.preventDefault()
    
    console.log(content)
    setComment(content)
    console.log(comment)
    


     await axios.post(`http://localhost:3001/comments`, { comment }).then((res) => {
      console.log(res)
      console.log(res.data)
    })
    // window.location.reload();
  }

  
    return (
      <div className=" relative create-comment-div">
        <form onSubmit={handleSubmit}>
          <input className=" w-10/12 h-24 create-comment-input" type="text" placeholder="WHAT'S ON YOUR MIND" onChange={handleChange} value={content} /> 
          <button className=" absolute bottom-0 right-36 font-semibold" type="submit">POST</button>
        </form>
      </div>
    )
  }

