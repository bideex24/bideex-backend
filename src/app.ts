import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 5;
  res.send(a);
});
// application route
app.use('/api', router);
app.get('/', (req, res) => {
  res.send('Welcome to Sports Sever!');
});

export default app;
