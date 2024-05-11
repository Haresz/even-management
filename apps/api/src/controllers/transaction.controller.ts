import { NextFunction, Request, Response } from 'express';
import prisma from '../prisma';

const addTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.params;
  try {
    let total = 0;

    for (const value of req.body.data) {
      const repoFindTicket: any = await prisma.tickets.findUnique({
        where: { id: parseInt(value.ticketId) },
      });
      if (!repoFindTicket) {
        throw new Error('Invalid input');
      }
      if (value.count != undefined || value.count != null) {
        total += repoFindTicket.price * value.count;
      }
    }

    const currentTime = new Date();
    const deadline = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);

    const repoAddTransaction = await prisma.transactions.create({
      data: {
        userId: parseInt(userId),
        total: total,
        method: req.body.method,
        deadline: deadline,
      },
    });

    await Promise.all(
      req.body.data.map(async (value: any) => {
        const repoTicketTransaction = await prisma.ticketsTransaction.create({
          data: {
            ticketId: value.ticketId,
            transactionId: repoAddTransaction.id,
            count: value.count,
          },
        });
        if (!repoTicketTransaction) {
          throw new Error('Invalid input');
        }
      }),
    );

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: 'server error',
      error: error,
    });
  }
};

const getAllTransactionsUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const repoCangeStatus = await prisma.transactions.updateMany({
      where: {
        userId: parseInt(userId),
        status: 'pending',
        deadline: {
          gt: new Date(),
        },
      },
      data: {
        status: 'failed',
      },
    });

    const repoGetAllTransactionsUser: any = await prisma.transactions.findMany({
      where: { userId: parseInt(userId) },
      include: {
        ticket: {
          include: {
            ticket: {
              include: {
                event: true,
              },
            },
          },
        },
      },
    });

    return res.status(200).send({
      status: 200,
      success: true,
      message: 'get all transactions successfuly',
      data: repoGetAllTransactionsUser,
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

const getDetailTransaction = async (req: Request, res: Response) => {
  const { transactionId } = req.params;
  try {
    const repoGetDetail: any = await prisma.transactions.findUnique({
      where: { id: parseInt(transactionId) },
      include: {
        ticket: {
          include: {
            ticket: {
              include: {
                event: true,
              },
            },
          },
        },
      },
    });

    const repoTicketTransaction = await prisma.ticketsTransaction.findMany({
      where: {
        transactionId: parseInt(transactionId),
      },
    });

    return res.status(200).send({
      status: 200,
      success: true,
      message: 'get detail transactions successfuly',
      data: repoGetDetail,
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

const updateSatatusTransaction = async (req: Request, res: Response) => {
  const { transactionId } = req.params;
  try {
    const repoUpdateStatus = await prisma.transactions.update({
      where: { id: parseInt(transactionId) },
      data: {
        status: 'success',
      },
    });
    return res.status(200).send({
      status: 200,
      success: true,
      message: 'update status transactions successfuly',
      data: repoUpdateStatus,
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

export default {
  addTransaction,
  getAllTransactionsUser,
  getDetailTransaction,
  updateSatatusTransaction,
};
