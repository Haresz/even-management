import eventController from '../controllers/event.controller';
import { Router } from 'express';
import ticketController from '../controllers/ticket.controller';
import { verifyTokenController } from '../controllers/user.controller';

const ticketRouter = Router();

ticketRouter.post(
  '/:eventId',
  verifyTokenController,
  ticketController.addTicket,
  eventController.updateAvailableTicket,
);
ticketRouter.post(
  '/update/:id',
  verifyTokenController,
  ticketController.findUniqeTicket,
  ticketController.updateTicket,
  eventController.updateAvailableTicket,
);
ticketRouter.delete(
  '/delete/:id',
  verifyTokenController,
  ticketController.findUniqeTicket,
  ticketController.deleteTicket,
  eventController.updateAvailableTicket,
);
export default ticketRouter;
