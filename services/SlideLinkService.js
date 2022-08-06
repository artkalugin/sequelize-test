import Models from '../models.js'

class SlideLinkService {
    constructor (sequelize) {
        Models(sequelize)
        this.client = sequelize
        this.models = sequelize.models
    }

    async createSlideLink(href, text, slideId) {
        try {
            const slideLink = await this.models.slideLink.create({
                href,
                text,
                slideId
            })
            return slideLink
        }
        catch (error) {
            return error
        }
    }
}

export default SlideLinkService