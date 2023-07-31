import { Seguro } from '../config/database';
import { SeguroModel } from '../models/Seguro';

export const getSeguros = async (): Promise<SeguroModel[]> => {
  const seguros = await Seguro.findAll();
  return seguros;
};
