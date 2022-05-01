const db = require( '../config/db.config' );
const Ong = db.ong;
const Op = db.Sequelize.Op;


exports.create = ( req, res ) => {

    //validate request
    if ( !req.body.nome )
    {
        res.status( 400 ).send( {
            message: "Content not be empty !"
        } );
        return;
    }

    // Create a ong
    const ong = {
        id_ong: req.body.id_ong,
        data_registro: req.body.data_registro,
        nome: req.body.nome,
        endereco: req.body.endereco,
        complemento: req.body.complemento,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    };

    // Save ong in the database
    Ong.create( ong )
        .then( data => {
            res.send( data );
        } )
        .catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while creating the Ong."
            } );
        } );
};

exports.findAll = ( req, res ) => {
    const nome = req.body.nome;
    let condition = nome ? {
        nome: { [ Op.like ]: `%${ nome }%` }
    } : null;

    Ong.findAll( { where: condition } )
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

exports.findOne = ( req, res ) => {
    const id = req.body.id_ong;

    Ong.findByPk( id )
        .then( data => {
            if ( data )
            {
                res.send( data );
            } else
            {
                res.status( 404 ).send( {
                    message: `Cannot find Ong with id=${ id }.`
                } );
            }
        } ).catch( err => {
            res.status( 500 ).send( {
                message: "Error retrieving Ong with id = " + id
            } );
        } );
};

exports.update = ( req, res ) => {
    const id = req.params.id_ong;

    Ong.update( req.body, {
        where: { id: id }
    } )
        .then( num => {
            if ( num == 1 )
            {
                res.send( {
                    message: `Cannot update Ong with id = ${ id }. Maybe Ong was not fount or req.body is empty !`
                } );
            }
        } ).catch( err => {
            res.status( 500 ).send( {
                message: "Error updating Ong with id = " + id
            } );
        } );
};

exports.delete = ( req, res ) => {
    const id = req.params.id_ong;

    Ong.destroy( {
        where: { id: id }
    } )
        .then( num => {
            if ( num == 1 )
            {
                res.send( {
                    message: "Ong was deleted successfully !"
                } );
            }
            else
            {
                res.send( {
                    message: `Cannot delete Ong with id = ${ id }. Maybe Ong was not found !`
                } );
            }
        } )
        .catch( err => {
            res.status( 500 ).send( {
                message: "Could not delete Ong with id = " + id
            } );
        } );
};

exports.schema = ( req, res ) => {
    res.send(
        {
            "data_registro": "YYYY-MM-DD",
            "nome": "Nome",
            "endereco": "Rua Alguma coisa nº 777",
            "complemento": "something / Can be Null",
            "cep": "12345678",
            "cidade": "São Paulo",
            "estado": "SP",
            "latitude": 10.123456,
            "longitude": -99.999999
        }
    );
}; 
