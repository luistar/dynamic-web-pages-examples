import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return <section id="main">
            <a href="/"> Back to the homepage</a>
            <h1>A Single Page App with React</h1>
            <p>
                This single-page web app leverages React and AJAX to fetch a JSON file with a list of
                articles and then shows the fetched articles to the viewers.
            </p>
            <p>
                🧑‍🏫 <span className="bold">Assignment</span>: 
                Try and scrape this web page using the language/library/framework of your choice.
                The goal is to save a CSV file with the title, author and date of each article. 
                Assume you <span className="bold">cannot</span> directly download the referenced json file.
            </p>
        </section>
    }
}