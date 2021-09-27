import React, {useState} from "react";
import ReactDOM from "react-dom";
import Greece from "@svg-maps/greece";
import { RadioSVGMap  } from "react-svg-map";
import { Container, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer.js';
import NVBar from './components/navbar.js';
import Home from './components/home.js';
import Login from './components/login.js';
import PostCoin from './components/postCoin.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App(){

    const login = (loggedIn) =>{
        console.log(loggedIn)
    }
    return (
        <Router>
            <Container>
            <NVBar/>
            <Switch key={"nav"}>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <div>Hello</div>
                </Route>
                <Route path="/login">
                    <Login login={login}/>
                </Route>
                <Route path="/postCoin">
                    <PostCoin/>
                </Route>
            </Switch>
            
            <Footer/>
            </Container>
        </Router> 
    )
}

export default App;
