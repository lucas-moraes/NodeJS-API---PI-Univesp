const express = require( 'express' );
const cors = require( 'cors' );

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use( cors( corsOptions ) );

app.use( express.json() );

app.use( express.urlencoded( { extended: true } ) );

app.get( "/", ( req, res ) => {
    res.json( { message: "It's running !!!" } );
} );

const PORT = process.env.port || 8080;
app.listen( PORT, () => {
    console.log( `It's running on port ${ PORT }.` );
} );



/*
* Antigo
*/

// (
//     async () => {
//         const database = require( './app/config/db.config' );
//         const Usuario = require( './app/model/usuario.model' );
//         const Ong = require( './app/model/ong.model' );

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