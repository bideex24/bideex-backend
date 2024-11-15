import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.get('/test', (req: Request, res: Response) => {
  const a = 'bideex server test';
  res.send(a);
});
// application route
app.use('/api', router);
app.get('/', (req, res) => {
  res.send('Welcome to bideex Sever!');
});

export default app;
