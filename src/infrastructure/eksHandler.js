const express = require('express');
const { executeService } = require('../application/service');

const app = express();

app.get('/execute', (req, res) => {
    const input = req.query.input;
    const result = executeService(input);

    res.status(200).send({ result });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

