const express = require('express');
const { db, Todos } = require('./db/db');

const app = express()

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', async(req, res) => {
    const todo = await Todos.create({
        task: req.body.task
    })
    const todos = await Todos.findAll()
    res.status(201).render('index', { todos });

});



db.sync()
    .then(() => {
        app.listen(5555, () => {
            console.log(`Server started on http://localhost:5555`);
        });
    }).catch((err) => {
        console.error(err);
    });