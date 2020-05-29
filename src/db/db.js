const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/task.db'
})


// test command for db connection
// db.authenticate()
//     .then(() => {
//         console.log('Database connected');
//     }).catch((err) => {
//         console.error(err);
//     });


const Todos = db.define('todo', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    task: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false
    }

})

module.exports = {
    db,
    Todos
}