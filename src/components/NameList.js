import React from 'react'
import Person from './Person'

function NameList() {

   const persons = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "age": 28,
      "gender": "female",
      "email": "alice.johnson@example.com",
      "phone": "+1-555-111-2222"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "age": 34,
      "gender": "male",
      "email": "bob.smith@example.com",
      "phone": "+1-555-333-4444"
    },
    {
      "id": 3,
      "name": "Charlie Davis",
      "age": 41,
      "gender": "male",
      "email": "charlie.davis@example.com",
      "phone": "+1-555-555-6666"
    },
    {
      "id": 4,
      "name": "Diana Evans",
      "age": 25,
      "gender": "female",
      "email": "diana.evans@example.com",
      "phone": "+1-555-777-8888"
    }
  ]

    // const names = ['Arun', 'Vinay', 'Ambika']
    // const nameList = names.map(name => <h2>{name}</h2>)
const personList = persons.map(person => <Person key = {person.id} person = {person} />)
  return <div>{personList}</div>
}
export default NameList
