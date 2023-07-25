import React from 'react';
import { useState } from 'react';

const Myform = () => {
    const [name, setName] = useState("");
    return(
        <form>
            <label>Enter Your Name :</label>
            <input type="text" value={name} setName={setName}/>
        </form>
    )
}


export default Myform;