import {useState} from "react";

const useCoin = (value) =>{

    const url = "http://127.0.0.1:4000/find?region=" + value

    const [coin, getCoin] = useState()

    //fetch coin ye boiiii
    fetch(url).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error("Something went wrong")
        }
    }).then(data => {
        getCoin(data)
    }).catch(err => {
        console.log(err)
    })
    
    return { coin }
}

export default useCoin;