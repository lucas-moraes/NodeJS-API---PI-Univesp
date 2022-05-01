const Sequelize = require( 'sequelize' );

const sequelizeObj = new Sequelize( {
    dialect: 'sqlite',
    storage: './db/database.sqlite'
} );

const db = {};

db.Sequelize = Sequelize;
db.sequelizeObj = sequelizeObj;

db.usuario = require( '../model/usuario.model' )( sequelizeObj, Sequelize );
db.ong = require( '../model/ong.model' )( sequelizeObj, Sequelize );


module.exports = db;