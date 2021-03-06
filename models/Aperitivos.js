const db = require('./db')

const Aperitivos = db.sequelize.define('Aperitivo', {
    nome: {
        type: db.Sequelize.STRING(60),
        require: true
    },
    descricao: {
        type: db.Sequelize.TEXT,
        require: true
    },
    valor: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    valorGasto: {
        type: db.Sequelize.FLOAT,
        require: true
    }

})

//create table Aperitivos
//Aperitivos.sync({ force: true })

module.exports = Aperitivos