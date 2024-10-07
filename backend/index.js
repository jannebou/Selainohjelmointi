const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

let persons = [
  {
    id: "1",
    name: "Aku Ankka",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Roope Ankka",
    number: "040-1234567",
  },
  {
    id: "3",
    name: "Nalle Puh",
    number: "040-12345678",
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

// Get all persons
app.get('/api/persons', (request, response) => {
  response.json(persons)
})

// Get a specific person by ID
app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(person => person.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

// Delete a person by ID
app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id !== id)
  
  response.status(204).end()
})

// Add a new person
app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number missing' 
    })
  }

  const newPerson = {
    id: generateId(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(newPerson)
  response.json(newPerson)
})

// Generate a new unique ID
const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => Number(n.id)))
    : 0
  return String(maxId + 1)
}

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
