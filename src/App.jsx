// // import { useState } from "react";
// // import { useMemo } from "react";
// // const App=()=>{ 
// //   const [add,setAdd]=useState(0);
// //   const [sub,setSub]=useState(100);
// //   const myMulti=useMemo(()=>{
// //       console.log("*****");
// //       return add*2;
// //     }
// //   )
// //   return(
// //     <>
// //     <h1>welcome to usememo hook</h1>
// //     <h1>mutiplication: {myMulti}</h1>
// //     <button onClick={()=>{setAdd(add+1)}}>increment</button>
// //     <h3>increment: {add}</h3>
// //     <button onClick={()=>{setSub(sub-1)}}>decrement</button>
// //     <h3>increment: {sub}</h3>
// //     </>
// //   )
// // }
// // export default App;
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
// // import { useState,useMemo } from "react";
// // const App=()=>{
// //   const[mynum,setMynum]=useState(0);
// //   const[name,setName]=useState("");
// //   const myMulti=useMemo(()=>{
// //     for(var i=0; i<10000000;i++){}
// //     return mynum*2;
// //   },[mynum])
// //   return(
// //     <>

// //       <h1>Welcome!!!</h1>
// //       Select Number: <input type="number" value={mynum}  
// //       onChange={(e)=>{setMynum(e.target.value)}}/>
// //        Select Name: <input type="text" value={name}  
// //       onChange={(e)=>{setName(e.target.value)}}/>
// //       <hr />
// //       <h1>Multiplication:{myMulti}</h1>
// //     </>
// //   )
// // }
// // export default App;
// ///////////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// const Home=()=>{
//   const[add,setAdd]=useState(0);
//   const[sub,setSub]=useState("");
//   function myMulti() {
//     console.log("***********");
//   return add*2
    
//   ,[add]}
//   return(
//     <>
//     <h1>welcome!!!</h1>
//     <h3>addition:{add}</h3>
//     <button onClick={()=>{setAdd(add+1)}}>add</button>
//     <h3>subtraction:{sub}</h3>
//     <button onClick={()=>{setSub(sub-1)}}>sub</button>
//     <h1>multiplication:{myMulti()}</h1>
//     </>
//   )
// }
// export default Home;

// import { useState,useContext } from "react";
// import Cybrom from "./cybrom";
// import { createContext } from "react";
// const myContext=createContext();

// const App=()=>{
//     const [name,setName]=useState("sanju")
//     return(
//         <>
//         <h1>welcome!!!</h1>
//     <myContext.Provider value={{name,setName}}>
//     <Cybrom/>
//     </myContext.Provider>
//         </>
//     )
// }
// export default App;
// export {myContext};

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\( toolkit )\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import { useSelector,useDispatch } from "react-redux";
import { addtask } from "./todoslice";
import { useState } from "react";
const App=()=>{ 
    const work=useSelector(state=>state.todo.task);
    const dispatch=useDispatch();
    const [val,setVal]=useState("");
    console.log(work);
    let sno=0;
    const ans=work.map((key)=>{
      sno++;
      return(
        <>
        <tr>
          <td>{sno}</td>
          <td>{key.task}</td>
        </tr>
        </>
      )
    })
   
    
    return (
        <>
        <h1>welcome to to-do app </h1>
        enter your task:<input type="text" value={val}
               onChange={(e)=>{setVal(e.target.value)}}/>
        <button onClick={()=>{dispatch(addtask({task:val}))}}>add</button>
        <hr/>
        <table>
            <tr>
                <td>sno</td>
                <td>data</td>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default App;
