import React from 'react';
import './Article.css';
import { Card, Button,Form } from 'react-bootstrap'

function UpvoteSection(props) {
    const { name, upvotes, setarticleData } = props;

    async function fetchUpVotes() {
        const response = await fetch(`/api/article/${name}/upvotes`, {
            method: 'post'
        });
        const body = await response.json();
        setarticleData(body);
    }

    return (
        <div>
            <Card className="text-center"><Card.Body>
            <Button onClick={fetchUpVotes}variant="light">Like <i class="far fa-heart"></i></Button>
            {/* <button className="like" onClick={fetchUpVotes}>👍</button> */}
            <Card.Text>
            <p className="votes">This article has {upvotes} upvotes</p>
            </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}

export default UpvoteSection;