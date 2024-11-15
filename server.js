import express, { urlencoded } from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

let array = [
        ,
    {id: 2, name: "b", type: "example_two"},
    {id: 3, name: "c", type: "example_three"},
    {id: 4, name: "d", type: "example_four"}
]

app.get('/api/array', (req,res) => {
    res.send(array)
})

app.get('/api/array/:id', (req,res) => {
    const ex = array.find(e => e.id === parseInt(req.params.id))
    if (!ex) return res.status(404).send('Not Found')
    res.send(ex)
})

app.post('/api/array', (req,res)=>{
    const ex = {
        id: array.length+1,
        name: req.body.name,
        age: req.body.type
    }
    array.push(ex)
    res.send(ex)
})

app.put('/api/array/:id', (req,res) => {
    const ex = array.find(e => e.id === parseInt(req.params.id))
    if (!ex) return res.status(404).send('Not Found')
    ex.name = req.body.name
    ex.type = req.body.type
    res.send(ex)
})

app.delete('/api/array/:id', (req,res) => {
    const ex = array.find(e => e.id === parseInt(req.params.id))
    if (!ex) return res.status(404).send('Not Found')
    const index = array.indexOf(ex)
    array.splice(index,1)
    res.send(ex)
})

app.listen(PORT, ()=>console.log(`Server Started on ${PORT}`))