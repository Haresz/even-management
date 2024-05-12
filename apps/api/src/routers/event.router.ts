import { Router } from 'express';
import eventController from '../controllers/event.controller';
import { uplouder } from '../middlewares/uploder';
import ticketController from '../controllers/ticket.controller';
import promotionController from '../controllers/promotion.controller';
import { verifyTokenController } from '../controllers/user.controller';

const eventRouter = Router();

eventRouter.post(
  '/:id',
  verifyTokenController,
  uplouder('IMG', '/images').single('file'),
  eventController.addEvent,
);

eventRouter.get(
  '/',
  promotionController.updateIsActive,
  eventController.getAllEvents,
);
eventRouter.get(
  '/detail/:id',
  eventController.findIdEvent,
  eventController.getDetailEvents,
);

eventRouter.patch(
  '/:id',
  verifyTokenController,
  eventController.findIdEvent,
  eventController.updateEvents,
);
eventRouter.patch(
  '/publish/:id',
  verifyTokenController,
  eventController.findIdEvent,
  eventController.publishEvent,
);

eventRouter.delete(
  '/:id',
  verifyTokenController,
  eventController.findIdEvent,
  ticketController.deleteTicketEvent,
  eventController.deleteEvents,
);

export default eventRouter;
