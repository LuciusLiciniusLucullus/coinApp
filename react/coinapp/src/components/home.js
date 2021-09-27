import React, {useState} from "react";
import { Row, Col, Card} from 'react-bootstrap';
import GreeceSVG from '../greece';

function Home(){
    let coin_display;
    
    const [coin, getCoin] = useState({
            city: null,
            city_coin: null,
            city_desc: null,
            region: null,
            pic: null,
            trigger: false
        })

   
    
    const fetchAPI = async (value) =>{
        
        const url = "http://127.0.0.1:4000/find?region=" + value
        fetch(url).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).then(data => {
            getCoin({
                city: data[0].city_name,
                city_coin: data[0].city_coin,
                city_desc: data[0].city_desc,
                region: data[0].coin_region,
                pic: "http://127.0.0.1:4000/imgfeed/" + data[0].coin_img
            })
        }).catch(err => {
            console.log(err)
        })

        
    }
    


    //unused function
    const locMouseOver = (input) =>{
        const reg_name = input.target.attributes.name.value
        fetchAPI(reg_name)
    }

    const closePic = () => {
        getCoin(prevState =>({
            ...prevState,
            pic: null
        }))
        
    }

    if(coin.pic!= null) {
        coin_display = (
            <Card >
                <button id="b-right" onClick={closePic}>X</button>
                <Card.Img variant="top" src={coin.pic}></Card.Img>
                <Card.Title>{coin.city_coin}</Card.Title>
                <Card.Text>
                    <p>City: {coin.city}</p>
                    <p>Region: {coin.region}</p>
                    <p>Description: {coin.city_desc}</p>
                </Card.Text>
            </Card>
        )
    } else {
        coin_display = null
    }

    return(
        <Row>
            <Col sm={9}>
                <GreeceSVG getData = {fetchAPI} trigger = {coin.trigger} />
            </Col>

            <Col sm={3}>
                {coin_display}
            </Col>
        </Row>
    )
}

export default Home;