import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import userRouter from './routers/user.router';
import eventRouter from './routers/event.router';
import ticketRouter from './routers/ticket.router';
import reviewRouter from './routers/review.router';
import transactionRouter from './routers/transaction.router';
import dashboardRouter from './routers/dashboard.router';
import promotionRouter from './routers/promotion.router';

function configureApp(): Express {
  const app = express();
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: true }));
  return app;
}

function handleError(app: Express): void {
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path.includes('/api/')) {
      res.status(404).send('Not found !');
    } else {
      next();
    }
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (req.path.includes('/api/')) {
      console.error('Error : ', err.stack);
      res.status(500).send('Error !');
    } else {
      next();
    }
  });
}

function setRoutes(app: Express): void {
  app.use('/user', userRouter);
  app.use('/events', eventRouter);
  app.use('/ticket', ticketRouter);
  app.use('/review', reviewRouter);
  app.use('/transaction', transactionRouter);
  app.use('/dashboard', dashboardRouter);
  app.use('/promotion', promotionRouter);
}

function startServer(app: Express): void {
  app.listen(PORT, () => {
    console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
  });
}

export function main() {
  const app = configureApp();
  handleError(app);
  setRoutes(app);
  startServer(app);
}
