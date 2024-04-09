import { Request, Response } from 'express';
import prisma from '../prisma';

export const addDahsboard = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'user not found',
      });
    }
    const repoAddDhasboard = await prisma.dashboards.create({
      data: { userId: parseInt(req.params.id) },
    });
    return res.status(201).send({
      status: 201,
      success: true,
      message: 'switching role successfully',
      data: repoAddDhasboard,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: 'server error',
      error: (error as Error).message,
    });
  }
};

export const addeventCount = async (req: Request, res: Response) => {
  try {
    const repoAddEventCount = await prisma.dashboards.update({
      where: { id: parseInt(req.params.id) },
      data: { eventCount: +1 },
    });
    return res.status(201).send({
      status: 201,
      success: true,
      message: 'add event successfully',
      data: { dhasboard: repoAddEventCount, event: req.body },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: 'server error',
      error: (error as Error).message,
    });
  }
};
