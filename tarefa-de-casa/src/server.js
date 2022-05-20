const pokedexJson = require('./models/pokedex.json')
const express = require('express') 
const { response } = require('express')
const { get } = require('express/lib/response')
const { request } = require('express')
const app = express() 

app.use(express.json()) 

app.listen(3030, () => {
    console.log("Servidor na porta 3030")
})

app.get("/", (request, response) => {
    response.status(200).send(pokedexJson)
})

app.get ("/pokedex/buscar/:id", (request, response) => {

    let idRequest = resquest.params.idRequest
    console.log(idRequest)

    let pokedexEncontrado = pokedexJson.find(pokedex => pokedex.id == idRequest)
    
    response.status(200).send(pokedexEncontrado)
})

app.get("/pokedex/filtro", (request, response) => {

    let nameRequest = request.query.name.toLocaleLowerCase()
    console.log(nameRequest)

    let pokedexEncontrado = pokedexJson.filter(
        pokedex => pokedex.name.toLowerCase().includes(nameRequest)
    )

    response.status(200).send(pokedexEncontrado)
    
})

app.post("/pokedex", (request, response) => {

    let nameRequest = request.body.name;
    let typeRequest = request.body.type;
    let attackRequest =  request.body.attack;

    let novoPokedex = {
        id: (pokedexJson.length) + 1,
        name: nameRequest,
        type: typeRequest,
        attack: attackRequest,
    }

    pokedexJson.push(novoPokedex)

    response.status(201).json([
        {

        "message": "POkemon cadastrado",
        novoPokedex

        }
    ])
})

