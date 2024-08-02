const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 8000;

const app = (req, res) => {
    res.statusCode = 200;

    // Получаем IP адрес пода из переменной окружения
    const podIP = process.env.MY_POD_IP;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, World!\nPod IP: ${podIP}\n`);
};

let server;

if (require.main === module) {
    server = http.createServer(app);
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

module.exports = { app, server };
