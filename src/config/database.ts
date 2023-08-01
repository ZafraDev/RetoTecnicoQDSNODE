import { Sequelize, Dialect } from 'sequelize';
import { CoberturaFactory } from '../models/Cobertura';
import { SeguroFactory } from '../models/Seguro';
import { ClienteFactory } from '../models/Cliente';
import { PolizaFactory } from '../models/Poliza';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'database',
  process.env.DB_USERNAME || 'admin',
  process.env.DB_PASSWORD || 'Admin1234',
  {
    dialect: 'oracle' as Dialect,
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '1521'),
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected.`);
  })
  .catch((error: Error) => {
    console.log(error);
    console.log(`Database error. ${error}`);
  });

export const Cobertura = CoberturaFactory(sequelize);
export const Seguro = SeguroFactory(sequelize);
export const Cliente = ClienteFactory(sequelize);
export const Poliza = PolizaFactory(sequelize);

Cobertura.hasMany(Seguro, { as: 'seguros', foreignKey: 'ID_COBERTURA' });
Seguro.belongsTo(Cobertura, { as: 'cobertura', foreignKey: 'ID_COBERTURA' });
Seguro.hasMany(Poliza, { as: 'polizas', foreignKey: 'ID_SEGURO' });
Poliza.belongsTo(Seguro, { as: 'seguros', foreignKey: 'ID_SEGURO' });
Poliza.belongsTo(Cliente, { as: 'cliente', foreignKey: 'ID_CLIENTE' });
