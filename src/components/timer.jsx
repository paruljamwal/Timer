import React from "react";

const Timer=()=>{

let time=new Date().toLocaleDateString();
const [curtime,setCurtime]=useState(time);
const UpdateTime=()=>{
    time=new Date().toLocaleDateString();
    setCurtime(time);
};

setInterval(UpdateTime,1000);

return(

 <>
  
 <h1>{curtime}</h1>
 <h1 id="timer">Timer</h1>
 </>

)


}

export default Timer;