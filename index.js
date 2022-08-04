const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')

const app = express()

const sequelize = new Sequelize(
    'sequelize_test',
    'root',
    '',
     {
       host: '127.0.0.1',
       dialect: 'mysql'
     }
   )
   
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.')
}).catch((error) => {
    console.error('Unable to connect to the database: ', error)
})

const User = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

sequelize.sync().then(() => {
    console.log('User table created successfully!')
}).catch((error) => {
    console.error('Unable to create table: ', error)
})

app.get('/list', (req, res) => {
    User.findAll().then(r => {
        res.send(r)
    }).catch((err) => {
        res.send('Failed to retrieve data: ' + err)
    })
})

app.get('/create', (req, res) => {
    User.create({
        name: 'Jane',
        lastname: 'Smith',
        age: 23,
        email: 'jack@smith.com',
        password: 'qwerty123'
    }).then(r => {
        res.send(r)
    }).catch((err) => {
        res.send('Failed to create new user: ' + err)
    })
})

app.listen(5000, () => {
    console.log('Serving on port 5000');
});