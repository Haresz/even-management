import { Router } from 'express';
import ticketController from '../controllers/ticket.controller';

const ticketRouter = Router();

ticketRouter.post('/:eventId', ticketController.addTicket);
ticketRouter.post(
  '/update/:id',
  ticketController.findUniqeTicket,
  ticketController.updateTicket,
);
ticketRouter.delete(
  '/delete/:id',
  ticketController.findUniqeTicket,
  ticketController.deleteTicket,
);
export default ticketRouter;
