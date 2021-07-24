const express = require('express');
const path = require('path');
const cartas = require('./cartas')
const app = express();
const PORT = 5000;
let previousCard;

app.use(express.static(path.resolve(__dirname, './build')));

app.get('/', (req, res) => {
    return res.send('Tic Tac Boom');
})


app.get('/mandarDado', (req, res) => {
    var randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    let answer;
    switch (randomNumber) {
        case 1:
            answer = 'Tic'
            break;
        case 2:
            answer = 'Boom'
            break;
        case 3:
            answer = 'Tac'
            break;
        case 4:
            answer = 'Tac'
            break;
        case 5:
            answer = 'Boom'
            break;
        case 6:
            answer = 'Tic'
            break;
    }
    return res.send({
        number: randomNumber,
        answer: answer
    });
})

app.get('/escolherCarta', (req, res) => {
    console.log(cartas);
    let item = cartas[Math.floor(Math.random() * cartas.length)];
    if (previousCard == item) {
        item = cartas[Math.floor(Math.random() * cartas.length)];
    } else {
        previousCard = item;
    }
    return res.send(item);
})

app.get('/ligarBomba', (req, res) => {
    let randomNumber = Math.floor(Math.random() * (120 - 15 + 1)) + 15;
    return res.send('randomNumber => ' + randomNumber);
})

app.use((req,res,next)=>{
    return res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

app.listen(PORT, () => {
    console.log("Tic Tac Boom app running")
});