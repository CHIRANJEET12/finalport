import express, { Request, Response } from 'express';
// import mongoose from 'mongoose';
import router from './routes/user'; // Adjust the import path as necessary
import { PrismaClient } from '../src/generated/prisma';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const prisma = new PrismaClient({
    log: ['query'],
  });

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(router); 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
