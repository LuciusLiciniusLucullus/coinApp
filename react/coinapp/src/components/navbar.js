import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const navbar = () =>{

    const postCoin = () =>{
        if(sessionStorage.getItem("loggedIn") == true){
            return(
                <Nav>
                    <Link to ="/postCoin">Post Coin</Link>
                </Nav>
                
            )
        }else{
            return null
        }
    }

    const login = () =>{
        if(sessionStorage.getItem("loggedIn") == true){
            return(
                <Nav>
                    <Link to ="/login">Login</Link>
                </Nav>
            )
        }else{
            return null
        }
    }

    return(

            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <Link to = "/">ANCIENT COINS OF GREECE</Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Link to ="/about">About</Link>
            </Nav>
            {login()}
            {postCoin()}
            </Navbar>

    )
}

export default navbar;