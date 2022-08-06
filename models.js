import { DataTypes } from 'sequelize'

export default (sequelize) => {
    const Slide = sequelize.define('slide', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        heading: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    const SlideLink = sequelize.define('slideLink', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        href: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    const GalleryImage = sequelize.define('galleryImage', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        src: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Slide.hasMany(SlideLink, {
        foreignKey: {
            type: DataTypes.UUID,
            allowNull: false
        }
    })
    SlideLink.belongsTo(Slide)
}