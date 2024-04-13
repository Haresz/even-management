import { Router } from 'express';
import { getDashboardUser } from '../controllers/dhasboard.controller';

const dashboardRouter = Router();

dashboardRouter.get('/:userId', getDashboardUser);

export default dashboardRouter;
