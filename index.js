const express = require("express")
const app = express()
const cors = require("cors")
const tasksTable = require("@makeitrealcamp/db-mock")

app.use(cors())
app.use(express.json())


// - GET /api/tasks: para obtener todas las tareas.
app.get('/api/tasks', (req, res) => {
    const records = tasksTable.findAll()
    res.status(200).json(records);
    console.log(records)
});

//- GET /api/tasks/:id: para obtener una tarea en particular.
app.get('/api/tasks/:id', (req, res) => {
    const { id } = req.params
    console.log(id)
    const record = tasksTable.findById(id)
    res.status(200).json(record);
});

//- POST /api/tasks: para agregar una nueva tarea.
app.post('/api/tasks', (req, res) => {
    //sacar los datos del body
    const data = req.body
    const record = tasksTable.insert(data)
    console.log(data)
    res.status(200).json(record)
})

//- PUT /api/tasks/:id: para actualizar una tarea existente.
app.put('/api/tasks/:id', (req, res) => {
    const data = req.body
    const { id } = req.params
    const record = tasksTable.update({id: id, title: data.title})
    res.status(200).json(record)
})

//- DELETE /api/tasks/:id: para eliminar una tarea existente.
app.delete('/api/tasks/:id', (req, res) => {
    tasksTable.delete(id)
    res.status(200)
})

app.listen(8080, () => console.log('Listening on port 8080'));
