
// import Header from "./Header";
// import Data from "./Data";
// import Fotter from "./Fotter";
import Employee from "./Employee";
import Student from "./Student";

const nm="ashish sir";
const ci="banglore";



const App=()=>{
  return(
   // <h1>hello my subject is{sub}</h1>
   <>
   {/* <Header/>
  <Data/>
  <Fotter/> */}
  {/* <Employee  n="satyam" c="rewa"/> */}

  <Student n={nm} c={ci}/>

   </>

  )
  }

export default App;