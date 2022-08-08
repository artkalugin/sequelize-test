import { BOOLEAN } from 'sequelize'
import { STRING } from 'sequelize'
import { DataTypes } from 'sequelize'

export default (sequelize) => {
    // Большой слайдер на главной
    const Slide = sequelize.define('slide', {
        id: {
            type: DataTypes.STRING,
            autoIncrement: true,
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

    // Ссылки в большом слейдере на главной
    const SlideLink = sequelize.define('slideLink', {
        id: {
            type: DataTypes.STRING,
            autoIncrement: true,
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

    // Изображения в галерее
    const GalleryImage = sequelize.define('galleryImage', {
        id: {
            type: DataTypes.STRING,
            autoIncrement: true,
            primaryKey: true
        },
        src: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    // Карточки в «Уровнях подготовки» на главной
    const LevelCard = sequelize.define('levelCard', {
        id: {
            type: DataTypes.STRING,
                autoIncrement: true,
                primaryKey: true
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        href: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numPrograms: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    // Логотипы партнеров
    const Partner = sequelize.define('partner', {
        id: {
            type: DataTypes.STRING,
                autoIncrement: true,
                primaryKey: true
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    // «Известные выпускники» на главной, ответственный за поселение
    const Contact = sequelize.define('contact', {
        id: {
            type: DataTypes.STRING,
            autoIncrement: true,
            primaryKey: true
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: STRING,
        room: STRING,
        phone: STRING,
        email: STRING
    })

    // Короткие видео в «Институт глазами студентов»
    const Video = sequelize.define('video', {
        id: {
            type: DataTypes.STRING,
            autoIncrement: true,
            primaryKey: true
        },
        src: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    // Общежития в «Поселении»
    const Dormitory = sequelize.define('dormitory', {
        id: {
            type: DataTypes.STRING,
            autoIncrement: true,
            primaryKey: true
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    
    // Шаги в «Алгоритме поступления» на главной,
    // шаги в «Порядке поселения«, «Порядке распределения...» в «Поселении»
    const Step = sequelize.define('step', {
        id: {
            type: DataTypes.STRING,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    // Подшаги для Step (при необходимости визуально обозначаются линией с кружками слева)
    const Substep = sequelize.define('substep', {
        id: {
            type: DataTypes.STRING,
            autoIncrement: true,
            primaryKey: true
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        highlighted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
    
    // Документы
    const Document = sequelize.define('document', {
        id: {
            type: DataTypes.STRING,
            autoIncrement: true,
            primaryKey: true
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        href: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    
    Slide.hasMany(SlideLink, {
        foreignKey: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    SlideLink.belongsTo(Slide)

    Step.hasMany(Substep, {
        foreignKey: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    Substep.belongsTo(Step)
}