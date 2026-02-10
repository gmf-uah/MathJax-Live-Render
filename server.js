const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.txt': 'text/plain',
    '.json': 'application/json'
};

const server = http.createServer((req, res) => {
    // Remove query parameters for file lookup
    let filePath = req.url.split('?')[0];
    
    // Default to viewer.html
    if (filePath === '/') {
        filePath = '/viewer.html';
    }

    const fullPath = path.join(__dirname, filePath);
    const ext = path.extname(fullPath);
    const mimeType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(fullPath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('File not found');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server error');
            }
        } else {
            res.writeHead(200, { 
                'Content-Type': mimeType,
                'Cache-Control': 'no-cache, no-store, must-revalidate'
            });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Edit content.txt and watch it update in your browser!`);
});
