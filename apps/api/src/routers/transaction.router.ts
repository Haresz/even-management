import { Router } from 'express';
import transactionController from '../controllers/transaction.controller';
import ticketController from '../controllers/ticket.controller';
import eventController from '../controllers/event.controller';
import { verifyTokenController } from '../controllers/user.controller';

const transactionRouter = Router();

transactionRouter.post(
  '/:userId',
  verifyTokenController,
  transactionController.addTransaction,
  ticketController.ticketTransaction,
  eventController.eventTransaction,
);

transactionRouter.patch(
  '/:transactionId',
  verifyTokenController,
  transactionController.updateSatatusTransaction,
);

transactionRouter.get('/:userId', transactionController.getAllTransactionsUser);
transactionRouter.get(
  '/detail/:transactionId',
  transactionController.getDetailTransaction,
);

export default transactionRouter;
