import { Model, DataTypes } from 'sequelize';

export default class Materia2 extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        IdCarrera: DataTypes.INTEGER
      },
      {

        sequelize,
        modelName: 'Materia2',
      }
    );
  }

}