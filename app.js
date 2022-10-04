const express = require('express'),
    app = express(),
    port = 3001,
    root = '/api/buba-gump'

app.get(root + '/ping', (req, res) => {
    res.json('pong')
})

app.get(root + '/pong', (req, res) => {
    res.json('ping')
})

app.listen(port, () => {
    console.log(`Running on PORT: ${port}`)
})

