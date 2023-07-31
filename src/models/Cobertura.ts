import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

interface CoberturaDTO {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface CoberturaModel extends Model<CoberturaDTO>, CoberturaDTO {}

export class Cobertura extends Model<CoberturaModel, CoberturaDTO> {}

export type CoberturaStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): CoberturaModel;
};

export function CoberturaFactory(sequelize: Sequelize): CoberturaStatic {
  return <CoberturaStatic>sequelize.define(
    'COBERTURAS',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'ID_Cobertura',
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'Nombre_Cobertura',
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Descripcion',
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
}
