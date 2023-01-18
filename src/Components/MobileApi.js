import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MobileApi = () => {
    const [post ,setPost]= useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        
    })
  return (
    <div>
    <ul>
    {
        post.map(post=>(<li key={post.name}>{post.username}</li>))
    }
      </ul>
    </div>
  )
}

export default MobileApi
