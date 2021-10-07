import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button} from 'react-bootstrap';

import { useSelector } from "react-redux"
import { selectUser } from "../redux/user";
import { useDispatch } from "react-redux";
import { logout} from "../redux/user";

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


const Navibar = () =>{
    const user = useSelector(selectUser)

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    const postCoin = (
        <Nav>
            <Link to ="/postCoin">Post Coin</Link>
        </Nav>
    )

    const loginUser = (
    <Nav className="mr-auto">
        <Link to ="/Login">Login</Link>
    </Nav>)

    const logoutUser = (<Nav className="mr-auto">
        <Link to="/" onClick = {handleLogout}>Logout</Link>
    </Nav>)

    const postManClone = (
    <Nav className="mr-auto">
        <Link to ="/postMan">postMan CLONE</Link>
    </Nav>)
    
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <Link to = "/">ANCIENT COINS OF GREECE</Link>
            </Navbar.Brand>
        <Nav className="mr-auto">
            <Link to ="/about">About</Link>
        </Nav>
        
        { user ? logoutUser: loginUser}
        { user ? postCoin: null}
        {user ? postManClone: null}
        </Navbar>

    )
}

export default Navibar;