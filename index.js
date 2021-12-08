const { response } = require('express')
const express = require('express')
const { Server, request } = require('http')

const teams = require('./teams')

const app = express()
const bodyParser = require('body-parser')


const checkTeam = (request, response, next) => {


}



app.get('/teams', (request, response) => {
  return response.send(teams)
})
app.get('/teams/:id', (request, response) => {
  const id = request.params.id
  const foundTeam = teams.filter((team) => team.id == id)

  return response.send(foundTeam)
})

app.post('/', bodyParser.json(), (request, response) => {
  const {
    id, location, mascot, abbreviation, conference, division
  } = request.body

  if (!id || !location || !mascot || !abbreviation || !conference || !division) {
    return response.status(400).send('This is an error 400')
  }
  const newTeam = {
    id, location, mascot, abbreviation, conference, division
  }

  teams.push(newTeam)

  return response.status(201).send(newTeam)
})

app.put('/',)
// This has to be last.
app.all('*', (request, response) => {
  return response.status(404).send('This is a 404 error')
})


app.listen(1330)

