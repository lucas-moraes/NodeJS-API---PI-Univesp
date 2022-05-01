module.exports = app => {
    const usuarios = require( "../controller/usuario.controller.js" );

    let router = require( "express" ).Router();

    router.post( "/", usuarios.create );
    router.get( "/", usuarios.findAll );
    router.get( "/:id", usuarios.findOne );
    router.put( "/:id", usuarios.update );
    router.delete( "/:id", usuarios.delete );

    router.post( "/schema", usuarios.schema );

    app.use( "/api/usuarios", router );
};