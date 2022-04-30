module.exports = app => {
    const ongs = require( "../controller/ong.controller.js" );

    let router = require( "express" ).Router();

    router.post( "/", ongs.create );
    router.get( "/", ongs.findAll );
    router.get( "/:id", ongs.findOne );
    router.put( "/:id", ongs.update );
    router.delete( "/:id", ongs.delete );

    app.use( "/api/ongs", router );
};