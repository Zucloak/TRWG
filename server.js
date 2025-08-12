// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    // Set headers to enable SharedArrayBuffer
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');

    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; // Or whatever you name your html file
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200);
            res.end(content, 'utf-8');
        }
    });
}).listen(8080);

console.log('Server running at http://localhost:8080/');
console.log('Open this URL in your browser.');
