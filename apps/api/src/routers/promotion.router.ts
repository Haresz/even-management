import { Router } from 'express';
import promotionController from '../controllers/promotion.controller';
import eventController from '../controllers/event.controller';

const promotionRouter = Router();

promotionRouter.post(
  '/:id',
  eventController.findIdEvent,
  promotionController.addPromotion,
);

export default promotionRouter;
