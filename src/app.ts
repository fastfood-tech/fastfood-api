import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { categoryRouter, orderRouter, productRouter } from './routers';
import { disconnectDB } from './config/database';

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/categories', categoryRouter)
  .use('/products', productRouter)
  .use('/orders', orderRouter);

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
