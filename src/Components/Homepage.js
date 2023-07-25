import React from 'react'
import logo from './logo.svg'
 function Homepage() {
  return (
    <>
    <h1>Homepage</h1>  
    <img className="App-logo" src={logo} alt={<p>No image Readed</p>}/>
    <Homepage2/>   {/*calling Homepage2*/}
    </>
  )
}


function Homepage2() {
  <>
  <h1>this is home page 2</h1>
  </>
}
export default Homepage;
