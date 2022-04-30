const DataTypes = require( "sequelize" );
const database = require( "../config/db.config" );

const Usuario = database.define( 'usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data_registro: {
        type: DataTypes.DATE,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING( 50 ),
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING( 255 ),
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING( 255 ),
        allowNull: false
    },
    complemento: {
        type: DataTypes.STRING( 255 ),
        allowNull: false
    },
    cep: {
        type: DataTypes.NUMBER( 8 ),
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING( 255 ),
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING( 2 ),
        allowNull: false

    },
    latitude: {
        type: DataTypes.FLOAT( 2, 10 ),
        allowNull: false

    },
    longitute: {
        type: DataTypes.FLOAT( 2, 10 ),
        allowNull: false

    },
} );

module.exports = Usuario;