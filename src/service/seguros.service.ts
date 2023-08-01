import { Seguro, Cobertura } from '../config/database';
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
