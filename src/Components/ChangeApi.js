import React, { useEffect, useState } from 'react'

const ChangeApi = () => {
    const [count ,setCount] = useState( 0 )
    let API = "http://hn.algolia.com/api/v1/search?query=foo&tags=story"

        const fetchApiData = async(url)=>{
            try{
                const res = await fetch(url);
                const data = await res.json();
                console.log(data)
                
            }catch(error){
                console.log(error)
            }
        }

    useEffect(()=>{
        fetchApiData(API);
    },[]);

  return (
    <div>
      <h1>you clicked {count}  times</h1>
      <button onClick={()=>setCount(count + 1)}>count click</button>
    </div>
  )
}

export default ChangeApi
