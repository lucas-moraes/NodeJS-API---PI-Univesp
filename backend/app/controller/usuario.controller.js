const db = require( '../config/db.config' );
const Usuario = db.usuario;
const Op = db.Sequelize.Op;


// Create and Save a new Usuario
exports.create = ( req, res ) => {

    //validate request
    if ( !req.body.nome )
    {
        res.status( 400 ).send( {
            message: "Content not be empty !"
        } );
        return;
    }

    // Create a usuario
    const usuario = {
        id_usuario: req.body.id_usuario,
        data_registro: req.body.data_registro,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        endereco: req.body.endereco,
        complemento: req.body.complemento,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    };

    // Save usuario in the database
    Usuario.create( usuario )
        .then( data => {
            res.send( data );
        } )
        .catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while creating the Usuario."
            } );
        } );
};

// Retrieve all Usuarios from the database
exports.findAll = ( req, res ) => {
    const nome = req.body.nome;
    let condition = nome ? {
        nome: { [ Op.like ]: `%${ nome }%` }
    } : null;

    Usuario.findAll( { where: condition } )
        .then( data => {
            res.send( data );
        } )
        .catch( err => {
            res.status( 500 ).send( {
                message:
                    err.message || "Some error occurred while retrieving Usuarios."
            } );
        } );




};

// Find a single Usuario with id
exports.findOne = ( req, res ) => {
    const id = req.body.id_usuario;

    Usuario.findByPk( id )
        .then( data => {
            if ( data )
            {
                res.send( data );
            } else
            {
                res.status( 404 ).send( {
                    message: `Cannot find Usuario with id=${ id }.`
                } );
            }
        } ).catch( err => {
            res.status( 500 ).send( {
                message: "Error retrieving Usuario with id = " + id
            } );
        } );
};

// update a Usuario by the id in the request
exports.update = ( req, res ) => {
    const id = req.params.id_usuario;

    Usuario.update( req.body, {
        where: { id: id }
    } )
        .then( num => {
            if ( num == 1 )
            {
                res.send( {
                    message: `Cannot update Usuario with id = ${ id }. Maybe Usuario was not fount or req.body is empty !`
                } );
            }
        } ).catch( err => {
            res.status( 500 ).send( {
                message: "Error updating Usuario with id = " + id
            } );
        } );
};

// Delete a Usuario with the specified id in the request
exports.delete = ( req, res ) => {
    const id = req.params.id_usuario;

    Usuario.destroy( {
        where: { id: id }
    } )
        .then( num => {
            if ( num == 1 )
            {
                res.send( {
                    message: "Usuario was deleted successfully !"
                } );
            }
            else
            {
                res.send( {
                    message: `Cannot delete Usuario with id = ${ id }. Maybe Usuario was not found !`
                } );
            }
        } )
        .catch( err => {
            res.status( 500 ).send( {
                message: "Could not delete Usuario with id = " + id
            } );
        } );
};
