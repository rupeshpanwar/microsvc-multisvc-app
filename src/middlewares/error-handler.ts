import {Request, Response, NextFunction } from 'express';
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if(err instanceof RequestValidationError){
    console.log('Handling request validation error')
  }

  if(err instanceof DatabaseConnectionError){
    console.log('Handling database connection')
  }
  
  console.log('something went wrong',err)

  res.status(400).send({
    message: err.message
  })
}