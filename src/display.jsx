import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Display=()=>{ 
    const [mydata,setMydata]=useState([]);
    const loaddata=async()=>{
        let api="http://localhost:3000/product";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
        

    }
    useEffect(()=>{
        loaddata()
    },[]);
    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                 <th>{key.productno}</th>
          <th>{key.productname}</th>
          <th>{key.productqty}</th>
          <th>{key.netprice}</th>
          <th>{key.customerno}</th>
               
                </tr>
                </>
        )
    })
    return(
        <>
        <h1>display</h1>
        <Table>
      <thead>
        <tr>
        <th>#</th>
          <th>product no</th>
          <th>product name</th>
          <th>product qty</th>
          <th>net price</th>
          <th>customer no</th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
    </Table>
        </>
    )
}
export default Display;