import { useState,useContext,createContext } from "react";
const myContext=createContext(); 
const Usercontext=({children})=>{
const[name,setName]=useState("himanshi");
    return(
        <>
<myContext.Provider value={{name}}>
{children}
</myContext.Provider>
        
        </>
    )
}
export default Usercontext;
export {myContext};