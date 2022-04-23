const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json())


const users = [
  { id: 1, name: "laizu", age: 24, job: 'web-dev' },
  { id: 2, name: "nasir", age: 22, job: 'app-dev' },
  { id: 3, name: "afra", age: 1, job: 'doctor' },
  { id: 4, name: "arafat", age: 9, job: 'cybersecuiry-expert' },
  { id: 5, name: "najmin", age: 24, job: 'digital marketer' }

]

app.get('/', (req, res) => {
  res.send('hello love express js!')
})
// normal declare of get for users
// app.get('/users', (req, res) =>{
//   res.send(users);
// })

app.get('/users', (req, res) => {
  if(req.query.name){
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLowerCase().includes(search));
    res.send(matched);
  }
  else{
    res.send(users);
  }
})
app.post('/users',(req, res)=>{
  const user = req.body;
  user.id = users.lenght + 1;
  users.push = user;
  res.send(user);
})

app.get('/user/:id', (req, res) =>{
  
  const id = req.params.id;
  const user = users[id];
  res.send(user);
} )

app.listen(port, () => {
  console.log(`listening port ${port}`)
  
})