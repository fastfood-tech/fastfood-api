import { NextFunction, Request, Response } from 'express';
import OrderServiceException from '../services/orders/exceptions/OrderServiceException';

export function handleApplicationErrors(
  err: OrderServiceException | Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof OrderServiceException) {
    res.status(err.httpStatusCode).send({
      message: err.message,
    });
    return;
  }

  console.log(err);

  res.status(500).send('internal server error XD');
}
