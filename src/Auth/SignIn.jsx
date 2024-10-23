
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import  Axios  from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignIn() {


   let [login, setLogin] = useState({});
   let changeInput = (e) =>{
       let {name,value} = e.target;
       setLogin({...login,[name]:value});
   }

   let submitData = async (e) =>{
        e.preventDefault();
        // console.log(login);
        let checkEmail = await Axios.get("http://localhost:3000/users?email="+login.email);
        if(checkEmail.data.length===1){
            if(checkEmail.data.password===login.password){
                
            }
            else{
                toast.error("Invalid Password");
            }
        }
        else{
            toast.error("Invalid email")
        }
   }


    return(
        <>
            <Container>

                <Row className="justify-content-md-center">

                    <Col md="4">
                    <h1>SignIn Page</h1>
                        <Form method="post"  onSubmit={(e)=>submitData(e)}>
                    
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={(e)=>changeInput(e)} placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"   name="password" onChange={(e)=>changeInput(e)} placeholder="Enter password" />
                            </Form.Group>

                           

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                             <Button type="submit" value="SignUp">SignIn</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                   
                </Row>
               
            </Container>
            <ToastContainer />
           
        </>
    )
}


export default SignIn;