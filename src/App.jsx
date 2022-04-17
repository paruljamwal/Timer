import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const App=()=>{

  let time=new Date().toLocaleTimeString();
  const [curtime,setCurtime]=useState(time);
  const UpdateTime=()=>{
      time=new Date().toLocaleTimeString();
      setCurtime(time);
  };
  
  setInterval(UpdateTime,1000);

  return (
    <div className='box'>
    <h1>{curtime}</h1>
    
    </div>
   
   )
   
  
}

export default App
