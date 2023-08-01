import { Op } from 'sequelize';
import { Seguro, Cobertura, Cliente, Poliza } from '../config/database';
import { SeguroModel } from '../models/Seguro';

export const getSeguros = async (): Promise<SeguroModel[]> => {
  const seguros = await Seguro.findAll({
    include: [
      {
        model: Cobertura,
        as: 'cobertura',
      },
    ],
  });
  return seguros;
};

export const getSeguroPorId = async (
  seguroId: number
): Promise<SeguroModel|null> => {
  const seguro = await Seguro.findByPk(seguroId, {
    include: [
      {
        model: Poliza,
        as: 'polizas',
        include: [{ model: Cliente, as: 'cliente' }],
      },
    ],
  });
  return seguro;
};
