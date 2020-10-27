const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())

const courses = [
    { id: 1, name: 'Course1'},
    { id: 2, name: 'Course2'},
    { id: 3, name: 'Course3'}
]

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.post('/api/courses', (req, res) => {
    const schemea = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.valid(req.body, schemea)
    console.log(result)

    if(result.error){
        res.status(400).send(result.error)
        return;
    } 

    const course = {
        id: courses.length + 1,
        name: req.body.name 
    }
    courses.push(course)
    res.send(course)
})

app.get('api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send('This course with the given ID was not found')
    res.send(course)
});


const port = process.env.PORT || 3000;
app.listen(port, () => 
    console.log(`Listening on PORT ${port}...`)
)