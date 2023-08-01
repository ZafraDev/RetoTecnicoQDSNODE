import { Request, NextFunction, Response } from 'express';
import { getSeguros } from '../service/seguros.service';
import handleResponse from '../utils/handleResponse';

export const getSegurosController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const seguros = await getSeguros();
    handleResponse(res, true, 200, undefined, seguros);
  } catch (err) {
    next(err);
  }
};
