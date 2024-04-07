import { Router } from 'express';
import eventController from '../controllers/event.controller';
import { addeventCount } from '../controllers/dhasboard.controller';

const eventRouter = Router();

eventRouter.post('/:id', eventController.addEvent, addeventCount);

eventRouter.get('/', eventController.getAllEvents);
eventRouter.get('/:id', eventController.getDetailEvents);

eventRouter.patch('/:id', eventController.updateEvents);
eventRouter.delete('/:id', eventController.deleteEvents);

export default eventRouter;
