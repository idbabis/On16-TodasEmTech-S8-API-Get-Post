const express = require('express');
const app = express();

app.listen(3000, () => {
        console.log('SERVIDOR ROSOU MANASSSS')
});

app.get("/", (request, response) => {
    response.status(200) . json ([{
        "message": "TA AQUI SUA RESPONSE, GATA"
    }])
})
