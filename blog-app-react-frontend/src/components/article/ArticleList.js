import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Article.css';
import articleContent from './SampleArticlesDB';


function ArticleList(props) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            const response = await fetch(`/api/article`, {
                method: 'post',
                body: JSON.stringify({}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            setArticles(data);
        }

        fetchArticles();

    }, []);

    console.log("articles from Articlelist page",articles)
    return (
        <div>
            <h1 id='articles'>Articles</h1>
            {
                articles.map((i, key) => (
                    <Link className='articlelink' key={key} to={`/article/${i.name}`}>
                        <h4>{i.title}</h4>

                    </Link>
                ))}


        </div>
    );
}

export default ArticleList;