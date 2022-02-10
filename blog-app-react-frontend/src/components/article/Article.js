import React, { useEffect, useState } from 'react';
import { Card, Button, Form, OverlayTrigger,Popover} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import articleContent from './SampleArticlesDB';
import Error from '../error/Error';
import Comments from './Comments';
import UpvoteSection from './UpvoteSection';
import AddComments from './AddComments';
import Updates from './Updates';

function Article(props) {

    // Storing url name using useparams
    const { name } = useParams();
    // console.log(name)


    // Temporary storage of DB data
    const [articleData, setarticleData] = useState({ title:"",name:"",description:"", upvotes: 0, comments: [] });

    // comparing name in db and urlparam name
    // const article = articleContent.find(i => i.name === name);


    useEffect(() => {
        fetchAPI();
    }, [name]);

    async function fetchAPI() {
        const response = await fetch(`/api/article/${name}`);
        const body = await response.json();
        console.log("api/article/name response",body);
        setarticleData(body);
    }


    async function handleDelete() {
        const response = await fetch(`/api/article/${name}/delete`, {
            method: 'post',
            body: JSON.stringify({}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
    }

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Deleted</Popover.Header>
          <Popover.Body>
             <strong>{name}</strong> data successfully deleted from db 
          </Popover.Body>
        </Popover>
      );



    if (!articleData) return <Error />
    return (
        <div >
            <Card className="text-center">

                <Card.Body>
                    {/* <Card.Title> {article.title}</Card.Title> */}
                    <Card.Title> {articleData.title}</Card.Title>
                    <Card.Text>
                        {articleData.description}
                    </Card.Text>
                    <Link to={`/article/${name}/update`}><Button>Update</Button></Link>
                    <Link to="/article-list">
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button variant="light" onClick={() => handleDelete(name)}>Delete</Button>
                    </OverlayTrigger>
                    </Link>
                    <UpvoteSection className="upvotes" name={name} setarticleData={setarticleData} upvotes={articleData.upvotes} />
                    < Comments comments={articleData.comments} />
                    <AddComments name={name} setarticleData={setarticleData} />
                </Card.Body>

            </Card>
        </div>
    );
}

export default Article;