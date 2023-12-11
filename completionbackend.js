const http = require('http');

// (replace this with a database )
let ratings = [];

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/store-rating') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const { rating } = JSON.parse(body);
                if (rating >= 1 && rating <= 10) {
                    ratings.push(rating);
                    console.log('Received rating:', rating);
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Rating stored successfully');
                } else {
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end('Invalid rating value');
                }
            } catch (error) {
                console.error('Error parsing rating data:', error);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error storing rating');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
