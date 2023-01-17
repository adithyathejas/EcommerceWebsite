import {Form,Button,Container } from "react-bootstrap";
import { useRef, useState } from "react";

const ContactUS = (props)=> {

    const Name = useRef('')
    const Phone = useRef('')
    const Email = useRef('')
    const [status,setStatus] = useState('')


    const sendToDb = async (event)=> {
           event.preventDefault();
           
           const details = {
            Name : Name.current.value ,
            Phonenum: Phone.current.value , 
            Email: Email.current.value

           }
           console.log(details)

           const response = await fetch('https://react-http-eb668-default-rtdb.firebaseio.com/UserContact.json',{
      method: 'POST',
      body: JSON.stringify(details),
      headers:{
        'Content-Type':'application/json'
      }});

      const data = await response.json()
      console.log("contact ", response.status)
      
      let status = {}
      
      if(response.status===200){
        setStatus(<ui>Thanku for contacting us we will contact you soon</ui>)
      }





    }

    return (
        <Container className="mt-5">

        
        <Form onSubmit={sendToDb}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" ref={Name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={Email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Mobile" ref={Phone}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    {status}
    </Container>
    );
}

export default ContactUS