import { Router } from 'express';
import { getDashboardUser } from '../controllers/dhasboard.controller';
import { verifyTokenController } from '../controllers/user.controller';

const dashboardRouter = Router();

dashboardRouter.get('/:userId', verifyTokenController, getDashboardUser);

export default dashboardRouter;
