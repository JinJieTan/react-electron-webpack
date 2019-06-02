const express = require('express')
const { Server } = require("ws");
const app = express()
const wsServer = new Server({ port: 8080 })
wsServer.on('connection', (ws) => {
    ws.onopen = function () {
        console.log('open')
    }
    ws.onmessage = function (data) {
        console.log(data)
        ws.send('234')
        console.log('onmessage' + data)
    }
    ws.onerror = function () {
        console.log('onerror')
    }
    ws.onclose = function () {
        console.log('onclose')
    }
});

app.listen(8000, (err) => {
    if (!err) { console.log('监听OK') } else {
        console.log('监听失败')
    }
})
