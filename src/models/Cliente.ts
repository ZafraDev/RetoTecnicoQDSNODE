import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

interface ClienteDTO {
  id: number;
  nombre: string;
  direccion: string;
  correoElectronico: string;
  telefono: string;
  fechaNacimiento: string;
  sexo: string;
}

export interface ClienteModel extends Model<ClienteDTO>, ClienteDTO {}

export class Cliente extends Model<ClienteModel, ClienteDTO> {}

export type ClienteStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ClienteModel;
};

export function ClienteFactory(sequelize: Sequelize): ClienteStatic {
  return <ClienteStatic>sequelize.define(
    'CLIENTES',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'ID_CLIENTE',
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'NOMBRE_CLIENTE',
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'DIRECCION',
      },
      correoElectronico: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'CORREO_ELECTRONICO',
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'NUMERO_TELEFONO',
      },
      fechaNacimiento: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'FECHA_NACIMIENTO',
      },
      sexo: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'SEXO',
      },
    },
    {
      schema: 'RETOTECNICO',
      freezeTableName: true,
      timestamps: false,
    }
  );
}
