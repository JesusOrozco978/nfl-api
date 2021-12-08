const { response } = require('express')
const express = require('express')
const { Server, request } = require('http')

const teams = require('./teams')

const app = express()

app.get('/teams', (request, response) => {
  return response.send(teams)
})
app.get('/teams/:id', (request, response) => {
  const id = request.params.id
  const foundTeam = teams.filter((team) => team.id == id)

  return response.send(foundTeam)
})

app.all('*', (request, response) => {
  return response.status(404).send('This is a 404 error')
})


app.listen(1330)

