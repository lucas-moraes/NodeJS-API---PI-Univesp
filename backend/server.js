const express = require( 'express' );
const cors = require( 'cors' );

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use( cors( corsOptions ) );

app.use( express.json() );

app.use( express.urlencoded( { extended: true } ) );

const db = require( './src/config/db.config' );

db.sequelizeObj.sync();

app.get( "/", ( req, res ) => {
    res.json( { message: "It's running !!!" } );
} );

require( './src/routes/ong.routes' )( app );
require( './src/routes/usuario.routes' )( app );

const PORT = process.env.port || 1111;
app.listen( PORT, () => {
    console.log( `It's running on port ${ PORT }.` );
} );



/*
* Antigo
*/

// (
//     async () => {
//         const database = require( './src/config/db.config' );
//         const Usuario = require( './src/model/usuario.model' );
//         const Ong = require( './src/model/ong.model' );

//         try
//         {
//             const resultado = await database.sync();
//             console.log( resultado );
//         } catch ( error )
//         {
//             console.log( error );
//         }
//     }
// )();