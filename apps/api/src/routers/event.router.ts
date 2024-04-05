import { Router } from 'express';
import eventController from '@/controllers/event.controller';

const eventRouter = Router();

eventRouter.post('/events/:id', eventController.addEvent);

eventRouter.get('/events', eventController.getAllEvents);
eventRouter.get('/events/:id', eventController.getDetailEvents);

eventRouter.patch('/events/:id', eventController.updateEvents);
eventRouter.delete('/events', eventController.deleteEvents);

export default eventRouter;
