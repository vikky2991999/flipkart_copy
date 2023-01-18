import React, { useEffect } from 'react'

const ApiCon = () => {
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(async(response)=>{
          const res =  await response.json()
        console.log(res)
        }
            )
        .catch((err)=> console.log(err))
    },[])
  return (
    <div>
      
    </div>
  )
}

export default ApiCon
