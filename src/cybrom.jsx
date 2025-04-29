import { useContext} from "react";
import { myContext } from "./App";

const Cybrom=()=>{
    const{name,setName}=useContext(myContext)
    return(
        <>
<h1>welcome:{name}</h1>  
<button onClick={()=>{setName("shivani")}}>change</button>     
 </>
    )
}
export default Cybrom;