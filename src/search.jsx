import axios from "axios";
import { useState } from "react";
const Search=()=>{
    const [name, setName]= useState("");
    const [mydata, setMydata] = useState([]);
    const handleSubmit=async()=>{
        let api=`http://localhost:3000/PUT/?name=${name}`;
        const response  = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    const ans=mydata.map((key)=>{
        return(
            <>
                <h1> Welcome:{key.name}</h1>
                <h2> Your Company Emp no:{key.age}</h2>
                <h2> Your Designation : {key.email}</h2>
                <h3> Your CTC : {key.contact}</h3>
            </>
        )
    })
    return(
        <>
         <h1> Search Page</h1>
         Enter name : <input type="text" value={name}
         onChange={(e)=>{setName(e.target.value)}} />
         <button onClick={handleSubmit}>Search</button>
         <hr />

         <div id="searchData">
            {ans}

         </div>
        </>
    )
}

export default Search;