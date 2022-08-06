import Models from '../models.js'

class GalleryImageService {
    constructor (sequelize) {
        Models(sequelize)
        this.client = sequelize
        this.models = sequelize.models
    }

    async createGalleryImage(src) {
        try {
            const galleryImage = await this.models.galleryImage.create({
                src
            })
            return galleryImage
        }
        catch (error) {
            return error
        }
    }
}

export default GalleryImageService