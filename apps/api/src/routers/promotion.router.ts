import { Router } from 'express';
import promotionController from '../controllers/promotion.controller';
import eventController from '../controllers/event.controller';
import { verifyTokenController } from '../controllers/user.controller';

const promotionRouter = Router();

promotionRouter.post(
  '/:id',
  verifyTokenController,
  eventController.findIdEvent,
  promotionController.addPromotion,
);

export default promotionRouter;
