const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags : {
      type:  DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsierrablancophoto.com%2Findianizebdff%2Fefaece137172.php&psig=AOvVaw3pDlPJ_akN7RuJfFbB8Pyu&ust=1649804123852000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPjHx7qNjfcCFQAAAAAdAAAAABAJ'
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER
    },
    population: {
      type: DataTypes.INTEGER
    },  
  }, 
  { timestamps: false }
  );};
