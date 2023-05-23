import React, {Component} from 'react';
import Article from './Article';

export default function ArticlesList(props) {
    let content = <p>No article has been loaded (yet)!</p>
    if(props.articles.length > 0) {
        content = props.articles.map((article) => (
            <Article key={article.title} article={article} />
        ))
    }
    return (
        <div>
            <h2>Articles</h2>
            <section id="articles-container">
                {content}
            </section>
        </div>
    )
}