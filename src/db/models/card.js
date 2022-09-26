const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  Card.init({
    cardName: DataTypes.STRING,
    pic_url: DataTypes.STRING,
    price: DataTypes.INTEGER,
    condition: DataTypes.STRING,
    city: DataTypes.STRING,
    status: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
