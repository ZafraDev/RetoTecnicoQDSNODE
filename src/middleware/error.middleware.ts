import { Request, Response } from 'express';
import HTTPError from '../errors/HTTPError';
import handleResponse from '../utils/handleResponse';

const errorMiddleware = async (
  error: any,
  req: Request,
  res: Response
): Promise<void> => {
  let message: string, name: string, status: number;
  if (error instanceof HTTPError) {
    message = error.message;
    status = error.status;
    name = error.name;
  } else {
    message = error.message;
    status = 500;
    name = 'Error Interno Desconocido';
  }
  handleResponse(res, false, status, message, undefined, name);
};

export default errorMiddleware;
