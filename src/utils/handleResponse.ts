import { Response } from 'express';

function handleResponse(
  res: Response,
  success: boolean = true,
  status: number = 200,
  message: string = 'La solicitud se realizó de manera correcta',
  data?: Object | any[] | null,
  error?: String
): void {
  // Sends data to user
  res.status(status).json({ data, message, status, success, error });
}

export default handleResponse;
