const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ message: 'Trivia Clash Backend is running!' });
});

app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    next();
});

app.use((req, res) => {
    res.status(404).send({ error: `Route not found: ${req.originalUrl}` });
});

app.get('/auth/postback/tunnel', (req, res) => {
    res.status(200).send({ message: 'Tunnel postback received' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});