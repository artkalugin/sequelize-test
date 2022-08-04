const { Sequelize, DataTypes } = require("sequelize");

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

const User = sequelize.define("users", {
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

    // User.create({
    //     name: 'Jack',
    //     lastname: 'Smith',
    //     age: 23,
    //     email: 'jack@smith.com',
    //     password: 'qwerty123'
    // }).then(res => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.error('Failed to create a new record : ', error)
    // })

    User.findAll().then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error)
    })

}).catch((error) => {
    console.error('Unable to create table: ', error)
});