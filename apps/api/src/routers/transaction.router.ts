import { Router } from 'express';
import transactionController from '../controllers/transaction.controller';
import ticketController from '../controllers/ticket.controller';
import eventController from '../controllers/event.controller';

const transactionRouter = Router();

transactionRouter.post(
  '/:userId',
  transactionController.addTransaction,
  ticketController.ticketTransaction,
  eventController.eventTransaction,
);

transactionRouter.get('/:userId', transactionController.getAllTransactionsUser);

export default transactionRouter;
