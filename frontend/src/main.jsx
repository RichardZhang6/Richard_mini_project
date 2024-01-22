import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

axios.get('http://localhost:3001/people').then(
  response =>{
    const people = response.data
    console.log(people)
  }
)

const pe = [
  {
      id:1,
      name: "Richard",
      birthdate: "04/11/2001"
  },
  {id:2,
  name: "Jack",
  birthdate: "01/03/2004"
  },
  {
      id:3,
      name: "John",
      birthdate: "17/09/1956"
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
