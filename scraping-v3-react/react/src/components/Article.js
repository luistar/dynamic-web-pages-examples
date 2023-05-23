import React, {Component} from 'react';

export default function Article(props) {
    return (
        <article className="article">
            <h3>{props.article.title}</h3>
            <p>
                <span className="author">{props.article.author}</span>,&nbsp; 
                <span className="year">{props.article.year}</span>.
            </p>
        </article>
    )
}