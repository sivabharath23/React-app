// import React from 'react'
// const Content = () => {
//     return (
//         <div className="cont">
//             <p>this is content!</p>
//             <button className="btn btn-success" style={{padding:"10px 20px"}}>Save</button>
//             <Mybutton/>
//             <Condition/>
//         </div>
//     )

// }

// const Mybutton = () => {
//     return(
//         <button className="btn btn-primary" style={{display:"inline"}}>DEL</button>
//     )
// }

// // const Myfunc = () => {
// //     alert('You are Deleting');
// // }

// /////////////////////////////////////////////////////////


// const Missed = ()=> {
//     return(
//      <h1>Missed the Goal!</h1>
//     )
// }

// const Made = ()=> {
//     return(
//      <h1>Made A Goal!</h1>
//     )
// }



// const Condition = (props) => {
//     const isgoal = props.isgoal;
    
// if(isgoal ){
//     return(<Made/>);
// }
// else {
//     return(<Missed/>);
// }
// };





// export default Content();

import React from 'react'

export default function Content() {
  return (
    <div>
         <input type="text"/>
         <button>Submit</button>
    </div>
  )
}
