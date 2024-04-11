import { Router } from 'express';
import reviewController from '../controllers/review.controller';

const reviewRouter = Router();

reviewRouter.post('/:eventId/:userId', reviewController.addreview);

reviewRouter.patch(
  '/:id',
  reviewController.findIdReview,
  reviewController.updateReview,
);

reviewRouter.delete(
  '/:id',
  reviewController.findIdReview,
  reviewController.deleteReview,
);

reviewRouter.get('/', reviewController.getAllReview);
reviewRouter.get('/:eventId', reviewController.getReviewEvent);

export default reviewRouter;
