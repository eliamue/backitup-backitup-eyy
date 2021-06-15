const express = require('express');
const cors = require('cors');
const app = express();
const kpop = require('./data.js');
const port = process.env.PORT || 3357;

app.use(cors())

app.get('/kpop', (req, res) => {
    res.json(kpop);
});

app.get('/kpop/:id', (req, res) => {
    const id = Number(req.params.id);
    const kgroup = kpop.find((bias) => bias.id === id)

    res.json(kgroup);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})