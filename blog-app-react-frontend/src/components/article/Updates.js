import React, { useState } from 'react';
import { Card, Button,Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function Updates(props) {
    const { name } = useParams();

    const [updateValues,setUpdateValues] = useState({username:"",description:""})

    function handleChange(event) {
        // console.log(event.target);
        const { name, value } = event.target;
        setUpdateValues({ ...updateValues, [name]: value });

    }

    async function handleUpdateSubmit() {
        const username = updateValues.username;
        const description = updateValues.description;

        const response = await fetch(`/api/article/${name}/update`, {
            method: 'post',
            body: JSON.stringify({ username, description }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        console.log(body)
        setUpdateValues(body);
    }
    return (
        <div>
            <Form onSubmit={handleUpdateSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control name="username" value={updateValues.username} onChange={handleChange} type="text" placeholder="type user name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control name="description" value={updateValues.description} onChange={handleChange} type="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
        </div>
    );
}

export default Updates;