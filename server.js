const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/home") {
        fs.readFile("home.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    else if (req.url === "/about") {
        fs.readFile("about.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    else if (req.url === "/contact") {
        fs.readFile("contact.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    else if (req.url === "/style.css") {
        fs.readFile("style.css", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });
    }

    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`
            <html>
            <head>
                <title>404 - Page Not Found</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <a href="/home">Go to Home</a>
            </body>
            </html>
        `);
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});