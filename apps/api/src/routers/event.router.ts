import { Router } from 'express';
import eventController from '../controllers/event.controller';
import { addeventCount } from '../controllers/dhasboard.controller';
import { uplouder } from '../middlewares/uploder';
import ticketController from '../controllers/ticket.controller';

const eventRouter = Router();

eventRouter.post(
  '/:id',
  uplouder('IMG', '/images').single('file'),
  eventController.addEvent,
  addeventCount,
);

eventRouter.get('/', eventController.getAllEvents);
eventRouter.get(
  '/:id',
  eventController.findIdEvent,
  eventController.getDetailEvents,
);

eventRouter.patch(
  '/:id',
  eventController.findIdEvent,
  eventController.updateEvents,
);
eventRouter.patch(
  '/publish/:id',
  eventController.findIdEvent,
  eventController.publishEvent,
);

eventRouter.delete(
  '/:id',
  eventController.findIdEvent,
  ticketController.deleteTicketEvent,
  eventController.deleteEvents,
);

export default eventRouter;
