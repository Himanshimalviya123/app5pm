
import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { MdEditSquare } from "react-icons/md";
import { useNavigate } from "react-router";

const Update=()=>{
    const [mydata, setMydata]= useState([]);
    const navigate= useNavigate();
    const laodData=async()=>{
        let api="http://localhost:3000/PUT";
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }
    useEffect(()=>{
        laodData();
    }, []);


 const myDel=async(id)=>{
    let api=`http://localhost:3000/PUT/${id}`;
    const response = await axios.delete(api);
toast.success("save")
    laodData();
    
 }


 const myEdit=(id)=>{
  navigate(`/myedit/${id}`)
 }

    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
              <tr>
                <td> {sno} </td>
                <td> {key.name} </td>
                <td> {key.age} </td>
                <td> {key.email} </td>
                <td> {key.contact} </td>
                <td>

                <MdDelete className="DelIcon" 
                onClick={()=>{myDel(key.id)}} />
                </td>
                <td>
                <MdEditSquare className="editIcon"
                onClick={()=>{myEdit(key.id)}} />
                </td>
              </tr>
            </>
        )
    });
    return(
        <>
         <h1> Update Page</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>age</th>
          <th>email</th>
          <th>contact</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
    {ans}
      </tbody>
      </Table>
      <ToastContainer />
              </>
    )
}
export default Update; 