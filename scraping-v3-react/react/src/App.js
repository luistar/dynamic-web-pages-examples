import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [articles, setArticles] = useState([])

  const updateArticles = () => {
    fetch("articles.json")
      .then(response => response.json())
      .then(articles => setArticles(articles))
  }

  const clearArticles = () => {
    setArticles([]);
  }

  return (
    <BrowserRouter basename='/scraping-v3'>
      <div className="App">
        <div className="wrapped">
          <Header />
          <button className="button" id="update-button" onClick={updateArticles}>Load the articles</button>
          <button className="button button-error" id="clear-button" onClick={clearArticles}>Clear articles list</button>
          <ArticlesList articles={articles}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
