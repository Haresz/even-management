import { Router } from 'express';
import reviewController from '../controllers/review.controller';
import { verifyTokenController } from '../controllers/user.controller';

const reviewRouter = Router();

reviewRouter.post(
  '/:eventId/:userId',
  verifyTokenController,
  reviewController.addreview,
);

reviewRouter.patch(
  '/:id',
  verifyTokenController,
  reviewController.findIdReview,
  reviewController.updateReview,
);

reviewRouter.delete(
  '/:id',
  verifyTokenController,
  reviewController.findIdReview,
  reviewController.deleteReview,
);

reviewRouter.get('/', reviewController.getAllReview);
reviewRouter.get('/:eventId', reviewController.getReviewEvent);

export default reviewRouter;
