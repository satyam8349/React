 import { useEffect, useState } from "react";

const App=()=>{
  const [ cnt, setCnt]=useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setCnt(cnt+1);
    },4000)
  });
  return(
    <>

    <h1>application form: {cnt}</h1>
    </>
  )
}
export default App;




 /*import { useEffect, useState } from "react";

const App=()=>{
  const [ cnt, setCnt]=useState(0);
  const [multi,setMulti]=useState(1);
  useEffect(()=>{
    setMulti(cnt*2);
  },[cnt])
  return(
    <>

    <button onClick={()=>{setCnt(cnt+1)}}>click here</button>
    <h1>my account: {cnt}</h1>
    <h2>multiplication: {multi}</h2>
  
    </>
  )
}
export default App;*/