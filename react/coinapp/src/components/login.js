import React, {useState} from "react";
import { Form, Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";
import axios from 'axios';

function Login(props){
    const {register, handleSubmit} = useForm()
    
    const history = useHistory()

    const [failedMsg, setFailMsg] = useState()

    const onSubmit = (user) =>{
        console.log(user)
        axios.post('http://127.0.0.1:4000/login', {
            user
        })
        .then((res) =>{
            console.log(res)
            sessionStorage.setItem('loggedIn', true)
            props.login("admin")
            history.push('/')
            dispatch(
                login({
                    username: "admin",
                    password: "admin123",
                    loggedIn: true
                })
            )
        })
        .catch(err =>{
            console.log(err)
            setFailMsg('Incorrect username or password!')
        })
        
    }

    const dispatch = useDispatch()

    

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Admin Username</Form.Label>
                <Form.Control type="text" placeholder="Enter email" {...register('username')}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register('password')}/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>

            {failedMsg}
        </Form>
    )
}

export default Login;