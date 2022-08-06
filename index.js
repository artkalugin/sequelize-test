import express from 'express'
import SlideService from './services/SlideService.js'
import { Sequelize } from 'sequelize'
import SlideLinkService from './services/SlideLinkService.js'

const app = express()

const sequelize = new Sequelize(
    'sequelize',
    'root',
    'rootroot',
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

const slideService = new SlideService(sequelize)
const slideLinkService = new SlideLinkService(sequelize)

try {
    await sequelize.sync()
    console.log('Tables created successfully!')
}
catch (error) {
    console.error('Unable to create tables: ', error)
}

// app.get('/list', async (req, res) => {
//     try {
//         const slides = await SlideService.createSlide()
//         res.send(users)
//     }
//     catch (error) {
//         res.send('Failed to retrieve data: ' + error)
//     }
// })

app.get('/create-slide', async (req, res) => {
    try {
        const slide = await slideService.createSlide(
            'Институт новых материалов и технологий УрФУ',
            'Актуальная информация о поступлении в 2022 году',
            'https://google.com'
        )
        const slideLink = await slideLinkService.createSlideLink(
            'https://yandex.ru',
            'Яндекс',
            slide.id
        )
        res.send(`Created slide: ${JSON.stringify(slide)} with the following links: ${JSON.stringify(slideLink)}`)
    }
    catch (error) {
        res.send('Failed to create new slide: ' + error)
    }
})

app.listen(3000, () => {
    console.log('Serving on port 3000');
});