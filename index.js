const express = require('express')
const app = express()
let people = [
    {
        id:1,
        name: "Richard",
        DOB: "04/11/2001"
    },
    {id:2,
    name: "Jack",
    DOB: "01/03/2004"
    },
    {
        id:3,
        name: "John",
        DOB: "17/09/1956"
    }
]
app.get('/', (request, response) => {
    response.send('<h1>root</h1>')
  })
app.get('/people',(request,response)=>{
    response.json(people)
})

const PORT=3001
app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)})