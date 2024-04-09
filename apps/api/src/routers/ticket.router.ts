import eventController from '../controllers/event.controller';
import { Router } from 'express';
import ticketController from '../controllers/ticket.controller';

const ticketRouter = Router();

ticketRouter.post(
  '/:eventId',
  ticketController.addTicket,
  eventController.updateAvailableTicket,
);
ticketRouter.post(
  '/update/:id',
  ticketController.findUniqeTicket,
  ticketController.updateTicket,
  eventController.updateAvailableTicket,
);
ticketRouter.delete(
  '/delete/:id',
  ticketController.findUniqeTicket,
  ticketController.deleteTicket,
  eventController.updateAvailableTicket,
);
export default ticketRouter;
