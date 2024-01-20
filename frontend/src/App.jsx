import { useState } from 'react'
import './App.css'
import Person from './components/person'

const App = (props) => {
  const [people, setPeople] = useState(props.people)
  const [newName, setNewName] = useState(
    'Name'
  ) 
  const [newDob,setDob] = useState('Birthdate')
  const [showAll, setShowAll] = useState(true)
  const addPerson = (event) => {
    event.preventDefault()
    const newp = {
      name: newName,
      birthdate:newDob,
      id: people.length+1
    }
  
    setPeople(people.concat(newp))
    setNewName('')
    setDob('')
    console.log('button clicked', event.target)
  }
  const peopleToShow = showAll
  ? people
  : []
  
  const handlenameChange = (event) => {
    
    setNewName(event.target.value)
  }
  const handlebirthchange = (event)=>{
    console.log(event.target.value)
    setDob(event.target.value)
  }
  const Registerpage = () =>(
    <div>
      <h1>Registration Page</h1>
    </div>
  )
  const Viewpage = () =>(
    <div>
      <h1>Viewing Page</h1>
    </div>
  )
  
  return (
    <div>
      {showAll?<Viewpage/>:<Registerpage/>}
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Go to Registration' : 'Go to Viewing' }
        </button>
      </div>
      <ul>
        {peopleToShow.map(person=><Person key={person.id} person={person}></Person>
       )}
      </ul>
      <form onSubmit={addPerson}>
        <label>
          Name: 
        <input value={newName} onChange={handlenameChange}/>
        </label>
        <br></br>
        <label>
          DOB:
          <input value={newDob} onChange={handlebirthchange}></input>
        </label>
        <br></br>
        <button type="submit" onClick={() => setShowAll(!showAll)}>Register</button>
      </form>  
    </div>
  )
}

export default App
