const express = require('express');
const { db, Todos } = require('../db/db');

const app = express()

let done = document.getElementById('done')

done.onclick = () => {
    let done = document.getElementById('task').innerText
    console.log('button clicked');

    db.destroy({
        where: { task: done }
    })
}