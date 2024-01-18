const express = require('express')
const app = express()
app.use(express.json())
let people = [
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
const generateId = () => {
    const maxId = people.length > 0
      ? Math.max(...people.map(n => n.id))
      : 0
    return maxId + 1
}
app.get('/', (request, response) => {
    response.send('<h1>root</h1>')
  })
app.get('/people',(request,response)=>{
    let name = request.query.name
    if (name){
        const person = people.find(person=> person.name===name)
        if (person){
            response.json(person)
        }
        else{
            response.status(404).end("could not find the person")
        }
    }
    else{
    response.json(people)
    }
})
app.post('/people',(request,response)=>{
    const body = request.body
    const newpeople ={
        id:generateId(),
        name:body.name,
        birthdate:body.birthdate
    }
    people=people.concat(newpeople);
    response.json(newpeople);
})


const PORT=3001
app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)})