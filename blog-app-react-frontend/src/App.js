import Home from './components/home/Home';
import About from './components/about/About';
import ArticleList from './components/article/ArticleList';
import Article from './components/article/Article';
import Error from './components/error/Error';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import { useState,useEffect } from 'react';
import Updates from './components/article/Updates';
import Addarticle from './components/article/Addarticle';

function App(props) {
  // const [userData, setUserData] = useState({
  //   token: undefined,
  //   user: undefined
  // });
  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     let token = localStorage.getItem("auth-token");
  //     if (token === null) {
  //       localStorage.setItem("auth-token", "");
  //       token = "";
  //     }
  //     const tokenResponse = await fetch('http://localhost:5000/users/tokenIsValid', null, { headers: { "x-auth-token": token } });
  //     if (tokenResponse.data) {
  //       const userRes = await axios.get("http://localhost:5000/users/", {
  //         headers: { "x-auth-token": token },
  //       });
  //       setUserData({
  //         token,
  //         user: userRes.data,
  //       });
  //     }
  //   }
  //   checkLoggedIn();
  // }, []);

  

  return (
    <Router>
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article-list" element={<ArticleList />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="/article/:name/update" element={<Updates/>}/>
          <Route path="/add" element={<Addarticle />}/>
          <Route path="/signin" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
