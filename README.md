# dynamic-web-pages-examples
This repo includes some dynamic web pages that are somewhat more challenging to scrape (including pages with AJAX requests and a single-page React app)

## Instructions
Copy the entire package in the root directory of a web server of your choice.
(e.g.: Nginx or Apache HTTP server). 
You can also use the Live Server extension in VS Code.
If you want to edit the React app and start a live server, move with a terminal in the <code>scraping-v3-react/react</code> directory and run <code>npm start</code>.
In this case, the React app will be available at <a href="http://localhost:3000/scraping-v3">http://localhost:3000/scraping-v3</a>. 

These pages are also hosted at https://tecweb-2023-scraping-examples.tiiny.site/, in case you don't want to set up a web server. 


## Exercises
<li><a href="/scraping-v1/"><code>scraping-v1</code></a> Simple page doing an AJAX request to fetch a JSON file and show its content. This exercise can still be done with the "traditional" approach and a bit of reverse engineering.</li>
<li><a href="/scraping-v2/"><code>scraping-v2</code></a> Simple page doing an AJAX request to fetch a JSON file and update the page accordingly. Does some processing on the fetched JSON file and is harder to reverse-engineer (hint: use Selenium!)</li>
<li><a href="/scraping-v3/"><code>scraping-v3</code></a> Single page React app implementing the same functionality as <code>scraping-v1</code>.</li>
