import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
    return (
        <div>
            <nav className="header">
                <h2 className="logo">Saranya's Blog</h2> {/* JSX*/}
                <div className="articles">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/article-list">Articles</Link>
                    <Link className="link" to="/add">Add Articles</Link>
                    <Link className="link" to="/signin">SignIn</Link>   
                    <Link className="link" to="/signup">SignUp</Link>  
                </div>
            </nav>
        </div>
    );
}

export default Header;