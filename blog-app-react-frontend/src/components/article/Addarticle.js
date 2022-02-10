import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Addarticle(props) {

    const [addArticle,setAddarticle] = useState({username:"",articlename:"",title:"",description:""});

    function handleChange(event) {
        // console.log(event.target);
        const { name, value } = event.target;
        setAddarticle({ ...addArticle, [name]: value });

    }

    async function handleaddArticle() {
        const username = addArticle.username;
        const name = addArticle.articlename;
        const title = addArticle.title;
        const description = addArticle.description;

        const response = await fetch(`/api/add`, {
            method: 'post',
            body: JSON.stringify({ username, name,title,description }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        console.log(body)
        setAddarticle(body);
    }
    
    return (
        <div>
            <Form onSubmit={handleaddArticle}>

                <br />
                <Form.Control name="username" type="text" placeholder="Username" value={addArticle.username} onChange={handleChange}/>
                <br />
                <Form.Control name="articlename" size="lg" type="text" placeholder="Articlename in lowercase without space "  value={addArticle.articlename} onChange={handleChange} />
                <br />
                <Form.Control name="title" size="lg" type="text" placeholder="Title" value={addArticle.title}  onChange={handleChange} />
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" as="textarea" rows={3} value={addArticle.description} onChange={handleChange} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>

        </div>
    );
}

export default Addarticle;