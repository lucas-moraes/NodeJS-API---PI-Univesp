module.exports = ( sequelizeObj, Sequelize ) => {
    const Usuario = sequelizeObj.define( 'usuario', {
        id_usuario: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        data_registro: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING( 50 ),
            allowNull: false
        },
        sobrenome: {
            type: Sequelize.STRING( 255 ),
            allowNull: false
        },
        endereco: {
            type: Sequelize.STRING( 255 ),
            allowNull: false
        },
        complemento: {
            type: Sequelize.STRING( 255 ),
            allowNull: true
        },
        cep: {
            type: Sequelize.STRING( 8 ),
            allowNull: false
        },
        cidade: {
            type: Sequelize.STRING( 255 ),
            allowNull: false
        },
        estado: {
            type: Sequelize.STRING( 2 ),
            allowNull: false

        },
        latitude: {
            type: Sequelize.FLOAT( 2, 10 ),
            allowNull: false

        },
        longitude: {
            type: Sequelize.FLOAT( 2, 10 ),
            allowNull: false

        },
    } );

    return Usuario;
};

