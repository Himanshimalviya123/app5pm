import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

const Insert=()=>{
  const [input,setInput]=useState({});
  const handleInput=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setInput(value=()=>({...value,[name]:value}))
    console.log(input);
    
  }
const handleSubmit=async(e)=>{
  let api="http://localhost:3000/product"
  const response=await axios.post(api,input)
  console.log(response);
  
}
    return(
        <>
        
          <center>
        <h1>insert form</h1>
        
        <Form id="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter product no.</Form.Label>
        <Form.Control type="text" onChange={handleInput} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter product name</Form.Label>
        <Form.Control type="text" onChange={handleInput} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Enter product qty</Form.Label>
        <Form.Control type="text" onChange={handleInput}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>net price</Form.Label>
        <Form.Control type="text" onChange={handleInput} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>customer no.</Form.Label>
        <Form.Control type="text"  onChange={handleInput}/>
       
      </Form.Group>
    
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </center>
        </>
    )
}
export default Insert;
