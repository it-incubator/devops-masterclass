const express = require('express');
const app = express();

// Симуляция задержки запуска приложения
let isAppReady = false;
let isAppStarted = false;

setTimeout(() => {
    isAppStarted = true;
    console.log('Application started');
}, 15000); // 15 секунд для старта приложения

setTimeout(() => {
    isAppReady = true;
    console.log('Application is ready to accept traffic');
}, 20000); // 20 секунд для готовности

// Liveness Probe - проверка состояния "живо ли приложение"
app.get('/healthz', (req, res) => {
    res.status(200).send('I am alive');
});

// Readiness Probe - проверка готовности обрабатывать запросы
app.get('/ready', (req, res) => {
    if (isAppReady) {
        res.status(200).send('I am ready');
    } else {
        res.status(503).send('I am not ready');
    }
});

// Startup Probe - проверка успешного запуска приложения
app.get('/startup', (req, res) => {
    if (isAppStarted) {
        res.status(200).send('I have started');
    } else {
        res.status(503).send('I am still starting');
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
