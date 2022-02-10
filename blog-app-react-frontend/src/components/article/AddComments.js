import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap'

function AddComments(props) {

    const { name, setarticleData } = props;
    console.log(props.setarticleData)
    console.log(name)

    // Storing Comments
    const [commentValues, setCommentValues] = useState({ username: "", comment: "" });

    function handleChange(event) {
        console.log(event.target);
        const { name, value } = event.target;
        setCommentValues({ ...commentValues, [name]: value });

    }

    async function fetchComments() {
        const username = commentValues.username;
        const text = commentValues.comment;

        const response = await fetch(`/api/article/${name}/comments`, {
            method: 'post',
            body: JSON.stringify({ username, text }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        setarticleData(body);
        setCommentValues({ username: "", comment: "" });
    }


    return (
        <div>
            <Card className="text-center"  border="primary">
                <Card.Title>Add Your Comments</Card.Title>
                <Form>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label >Username</Form.Label>
                        <Form.Control type="text"  name="username" placeholder="jhony" value={commentValues.username} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Enter Your Comments</Form.Label>
                        <Form.Control className="text-center" type="textarea" name='comment' placeholder="comments" rows={3} value={commentValues.comment} onChange={handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit"onClick={fetchComments}>
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
    );
}

export default AddComments;