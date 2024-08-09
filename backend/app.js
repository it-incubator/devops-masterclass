const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 8000;

const app = (req, res) => {
    res.statusCode = 200;

    // Получаем IP адрес пода из переменной окружения
    const podIP = process.env.MY_POD_IP;
    const AUTH_SERVICE_API = process.env.AUTH_SERVICE_API || "";
    const NODE_ENV = process.env.NODE_ENV;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, World!\nPod IP: ${podIP}\nAUTH_SERVICE_API: ${AUTH_SERVICE_API}\nNODE_ENV: ${NODE_ENV}\n`);
};

let server;

if (require.main === module) {
    server = http.createServer(app);
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

module.exports = { app, server };
