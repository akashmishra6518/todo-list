import React, { useState } from 'react'
import Header from './Header';
import List from './List';
function TODO() {
    const [item,setItem]=useState([]);
    const [input,setInput]=useState("");
    const addItem=()=>{
        if(input.trim()!=""){
            setItem([...item,input]);
            setInput("");
        }
    }
  return (
    <div>
        <header/>
        <input type="text"
            placeholder='enterr your item'
            onChange={(e)=>{setInput(e.target.value)}}
            value={input}
        />
        <button onClick={addItem}>add</button>
        <List data={item}/>
    </div>
  )
}

export default TODO;
