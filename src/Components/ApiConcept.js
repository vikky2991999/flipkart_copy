import React , { useState,useEffect } from "react";
import axios from "axios";

const ApiConcept=()=>{
    const [post, setPost]= useState([])
    const [count ,setCount] = useState(0)


    useEffect(()=>{
        console.log("hi ")
        axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(res=>{
        //     console.log(res)
        //     setPost(res.data)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
    },[])

    return(
        <div>
        <button onClick={()=>setCount(count +1)}>click me{count}</button>
        {
            post.map((curentElement )=>{
                return(
                    <div key={curentElement.id}>{curentElement.username} <br/>{curentElement.name}</div>
                )
            })
        }
        </div>
    )
}
export default ApiConcept;