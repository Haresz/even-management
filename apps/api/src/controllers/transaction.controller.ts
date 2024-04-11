import { NextFunction, Request, Response } from 'express';
import prisma from '../prisma';

const addTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { ticketId, userId } = req.params;
  try {
    const repoFindTicket: any = await prisma.tickets.findUnique({
      where: { id: parseInt(ticketId) },
    });
    if (!repoFindTicket) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Invalid input',
      });
    }
    const repoAddTransaction = await prisma.transactions.create({
      data: {
        ticketId: parseInt(ticketId),
        userId: parseInt(userId),
        total: parseInt(repoFindTicket?.price),
      },
    });
    if (!repoAddTransaction) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Invalid input',
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: 'server error',
      error: (error as Error).message,
    });
  }
};

export default {
  addTransaction,
};
