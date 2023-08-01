import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

interface PolizaDTO {
  id: number;
  cliente: string;
  seguro: string;
  fechaInicio: Date;
  fechaVencimiento: Date;
  estadoPoliza: string;
}

export interface PolizaModel extends Model<PolizaDTO>, PolizaDTO {}

export class Poliza extends Model<PolizaModel, PolizaDTO> {}

export type PolizaStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): PolizaModel;
};

export function PolizaFactory(sequelize: Sequelize): PolizaStatic {
  return <PolizaStatic>sequelize.define(
    'POLIZAS',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'ID_POLIZA',
      },
/*       clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'ID_CLIENTE',
      },
      seguroId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'ID_SEGURO',
      }, */
      fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'FECHA_INICIO',
      },
      fechaVencimiento: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'FECHA_VENCIMIENTO',
      },
      estadoPoliza: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'ESTADO_POLIZA',
      },
    },
    {
      schema: 'RETOTECNICO',
      freezeTableName: true,
      timestamps: false,
    }
  );
}
