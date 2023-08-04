import express from 'express';
import fs from 'fs';
import http from 'http';
import path from 'path';

const port = process.env.PORT ?? 3_000;

const app = express();

const fileName = path.join(__dirname, '..', 'messages.txt');
const data = fs.readFileSync(fileName, 'utf8');
const messages = data.split('\n').filter(line => line.length > 0);

app.get('/', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    });

    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];

    res.write(message);
    res.end();
});

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
    console.log('press CTRL+C to stop server');
});
