const db = require("../config/db.config");
const Ong = db.ong;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  //validate request
  if (!req.body.data) {
    res.status(400).send({
      message: "Nome not be empty !",
    });
    return;
  }

  // Create a ong
  const ong = {
    data_registro: req.body.data.data_registro,
    nome: req.body.data.nome,
    pwd: req.body.data.pwd,
    endereco: req.body.data.endereco,
    complemento: req.body.data.complemento,
    cep: req.body.data.cep,
    cidade: req.body.data.cidade,
    estado: req.body.data.estado,
    latitude: req.body.data.latitude,
    longitude: req.body.data.longitude,
  };

  // Save ong in the database
  Ong.create(ong)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Ong.",
      });
    });
};

exports.findAll = (req, res) => {
  Ong.findAll({ attributes: ["id_ong", "nome", "latitude", "longitude"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Usuarios.",
      });
    });
};

exports.findOne = (req, res) => {
  const nome = req.params.nome;

  console.log(nome);

  Ong.findOne({ where: { nome: nome } })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Ong with nome=${nome}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Ong with nome = " + nome,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id_ong;

  Ong.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Cannot update Ong with id = ${id}. Maybe Ong was not fount or req.body is empty !`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Ong with id = " + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id_ong;

  Ong.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Ong was deleted successfully !",
        });
      } else {
        res.send({
          message: `Cannot delete Ong with id = ${id}. Maybe Ong was not found !`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Ong with id = " + id,
      });
    });
};

exports.schema = (req, res) => {
  res.send({
    data_registro: "YYYY-MM-DD",
    nome: "Nome",
    pwd: "Pass",
    endereco: "Rua Alguma coisa nº 777",
    complemento: "something / Can be Null",
    cep: "12345678",
    cidade: "São Paulo",
    estado: "São Paulo",
    latitude: 10.123456,
    longitude: -99.999999,
  });
};
