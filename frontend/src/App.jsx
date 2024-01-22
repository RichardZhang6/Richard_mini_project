import { useState ,useEffect} from 'react'
import './App.css'
import Person from './components/person'
import axios from 'axios'

const Registerpage = () =>
  (
  <div>
    <h1>Registration Page</h1>
  </div>
)
const Viewpage = () =>{return (
  <div>
    <h1>Viewing Page</h1>
  </div>
)}

const App = (props) => {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState(
    ''
  ) 
  const [newDob,setDob] = useState('')
  const [showAll, setShowAll] = useState(true)
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/people')
      .then(response => {
        console.log('promise fulfilled')
        setPeople(response.data)
      })
  }, [])
  console.log('render', people.length, 'people')
  const addPerson = (event) => {
    event.preventDefault()
    const newp = {
      name: newName,
      birthdate:newDob,
      // id: people.length+1
    }
  
    // setPeople(people.concat(newp))
    setNewName('')
    setDob('')
    console.log('button clicked', event.target)
    axios
    .post('http://localhost:3001/people', newp)
    .then(response => {
      setPeople(people.concat(response.data))
      setNewName('')
      setDob('')
      
    })
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
        <button type="submit" >Register</button>
      </form>  
    </div>
  )
}

export default App
