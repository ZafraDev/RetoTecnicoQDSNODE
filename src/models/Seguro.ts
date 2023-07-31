import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

interface SeguroDTO {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  moneda: number;
  duracion: number;
  cobertura: number;
}

export interface SeguroModel extends Model<SeguroDTO>, SeguroDTO {}

export class Seguro extends Model<SeguroModel, SeguroDTO> {}

export type SeguroStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): SeguroModel;
};

export function SeguroFactory(sequelize: Sequelize): SeguroStatic {
  return <SeguroStatic>sequelize.define('SEGUROS', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'ID_SEGURO'
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'NOMBRE_SEGURO'
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'DESCRIPCION'
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'PRECIO'
    },
    moneda: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'MONEDA'
    },
    duracion: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'DURACION'
    },
    coberturaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'ID_COBERTURA'
    },
  },
  {
      freezeTableName: true,
      timestamps: false
  });
}