module.exports = (sequelizeObj, Sequelize) => {
  const Ong = sequelizeObj.define("ong", {
    id_ong: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    data_registro: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    pwd: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    endereco: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    cidade: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    estado: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    latitude: {
      type: Sequelize.FLOAT(2, 10),
      allowNull: false,
    },
    longitude: {
      type: Sequelize.FLOAT(2, 10),
      allowNull: false,
    },
  });

  return Ong;
};
