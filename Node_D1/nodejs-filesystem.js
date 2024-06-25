const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/api/createTextFile' && req.method === 'POST') {
        const folderPath = 'E:\Practice\DailyTasks\Node_D1';
        const fileName = 'newFile.txt';
        const filePath = path.join(folderPath, fileName);
        const fileContent = ()=>new Date();
        fs.writeFile(filePath, fileContent().toString(), (err) => {
            if (err) {
                console.error(err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error creating file' }));
                return;
            }
            console.log(`File ${fileName} created successfully`);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: `File ${fileName} created successfully` }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint not found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
