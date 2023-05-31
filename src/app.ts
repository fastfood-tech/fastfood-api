import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { handleApplicationErrors } from './middlewares/handleApplicationErrors';
import { categoryRouter, orderRouter, productRouter } from './routers';
import { disconnectDB } from './config/database';
import { json } from '../swagger';

const app = express();
if (process.env.NODE_ENV === 'development')
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(json));

app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/categories', categoryRouter)
  .use('/products', productRouter)
  .use('/orders', orderRouter)
  .use(handleApplicationErrors);

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
