import Models from '../models.js'

class SlideService {
    constructor (sequelize) {
        Models(sequelize)
        this.client = sequelize
        this.models = sequelize.models
    }

    async createSlide(heading, text, img) {
        try {
            const slide = await this.models.slide.create({
                heading,
                text,
                img,
            })
            return slide
        }
        catch (error) {
            return error
        }
    }
}

export default SlideService