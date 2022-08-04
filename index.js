import express from 'express'
import { Sequelize, DataTypes } from 'sequelize'

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
   
try {
    await sequelize.authenticate()
    console.log('Connection established successfully!')
}
catch (error) {
    console.error('Unable to connect to the database: ', error)
}

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

try {
    await sequelize.sync()
    console.log('Users table created successfully!')
}
catch (error) {
    console.error('Unable to create table: ', error)
}

app.get('/list', async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    }
    catch (error) {
        res.send('Failed to retrieve data: ' + error)
    }
})

app.get('/create', async (req, res) => {
    try {
        const user = await User.create({
            name: 'Jane',
            lastname: 'Smith',
            age: 23,
            email: 'jack@smith.com',
            password: 'qwerty123'
        })
        res.send('Created user: ' + JSON.stringify(user))
    }
    catch (error) {
        res.send('Failed to create new user: ' + error)
    }
})

app.listen(5000, () => {
    console.log('Serving on port 5000');
});