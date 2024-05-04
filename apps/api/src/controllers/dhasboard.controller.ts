import { NextFunction, Request, Response } from 'express';
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
    const repoUpdateUserRole = await prisma.users.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        role: 'EO',
      },
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

export const getDashboardUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const repoStatistic = await prisma.events.aggregate({
      where: {
        dashboard: {
          userId: parseInt(userId),
        },
      },
      _count: {
        _all: true,
      },
    });

    const repoTransaction = await prisma.ticketsTransaction.findMany({
      where: {
        ticket: {
          event: {
            dashboardId: parseInt(userId),
          },
        },
      },
    });

    const uniqueTransactions = new Set();

    repoTransaction.forEach((transaction) => {
      uniqueTransactions.add(transaction.transactionId);
    });

    const totalUniqueTransactions = uniqueTransactions.size;

    const repoGetDashboardUser = await prisma.dashboards.update({
      where: { userId: parseInt(userId) },
      data: {
        eventCount: repoStatistic._count._all,
        transactionCount: totalUniqueTransactions,
      },
      include: {
        user: true,
        events: true,
      },
    });

    return res.status(200).send({
      status: 200,
      success: true,
      message: 'get dashboard successfuly',
      data: repoGetDashboardUser,
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
