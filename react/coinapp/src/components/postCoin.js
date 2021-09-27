import React, {useState} from "react";
import { Form, Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function PostCoin(){
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) =>{
        console.log(data)
    }

    return(
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>City Name</Form.Label>
                <Form.Control type="text" placeholder="City Name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Coin Name</Form.Label>
                <Form.Control type="text" placeholder="Coin Name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>City Description</Form.Label>
                <Form.Control {...register('cityDesc')}type="text" placeholder="Description of the city.." />
            </Form.Group>

            <input {...register('picture')} type="file" name="picture"/>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>

            
        
    )
}

export default PostCoin;