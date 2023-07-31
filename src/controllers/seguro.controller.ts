import { Request, RequestHandler, Response } from 'express';
import { getSeguros } from '../service/seguros.service';

export const getSegurosController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const seguros = await getSeguros();
  res.status(200).json(seguros);
};
