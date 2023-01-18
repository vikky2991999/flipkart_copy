import React from 'react'
import ApiCon from './Components/ApiCon'
import ApiConcept from './Components/ApiConcept'
// import ChangeApi from './Components/ChangeApi'
// import DataFetching from './Components/DataFetching'
import MobileApi from './Components/MobileApi'
import Navbar from './Components/Navbar'
import Shoppingkart from './Components/Shoppingkart'

const App = () => {
  return (
    <div>
  
     <Navbar/> 
    
    {/* <ApiConcept/>*/}
     <ApiCon/>
     
    </div>
  )
}

export default App
