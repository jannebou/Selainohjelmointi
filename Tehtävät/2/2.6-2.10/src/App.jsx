import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // Fetch all persons
  const hook = () => {
    axios
      .get(baseUrl)
      .then(response => {
        console.log('Data fetched successfully', response.data)
        setPersons(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }

  useEffect(hook, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (newName === "") {
      alert("Please enter a name")
      return
    }

    if (newNumber === "") {
      alert("Please enter a number")
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
    }

    // Check if the person already exists
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      // Post the new person object to the backend
      axios
        .post(baseUrl, personObject)
        .then(response => {
          console.log('Person added:', response.data)
          // Update the state with the new person after the post request succeeds
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          console.error('Error adding person:', error)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <h2>Search</h2>
      search: <input/>

      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <div key={index}>
            {index + 1}: {person.name}: {person.number}
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
