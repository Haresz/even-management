import { NextFunction, Request, Response } from 'express';
import prisma from '../prisma';

const addTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.params;
  try {
    console.log(req.body);
    let total = 0;

    // Menghitung total harga dari semua tiket
    for (const value of req.body) {
      const repoFindTicket: any = await prisma.tickets.findUnique({
        where: { id: parseInt(value.ticketId) },
      });
      if (!repoFindTicket) {
        throw new Error('Invalid input');
      }
      console.log(total, repoFindTicket.price, value.count);
      total += repoFindTicket.price * value.count;
    }

    console.log(total);
    // Membuat transaksi
    const repoAddTransaction = await prisma.transactions.create({
      data: {
        userId: parseInt(userId),
        total: total,
      },
    });

    // Mengaitkan setiap tiket dengan transaksi yang sama
    await Promise.all(
      req.body.map(async (value: any) => {
        const repoTicketTransaction = await prisma.ticketsTransaction.create({
          data: {
            ticketId: value.ticketId,
            transactionId: repoAddTransaction.id,
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
    const repoGetAllTransactionsUser = await prisma.transactions.findMany({
      where: { userId: parseInt(userId) },
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

export default {
  addTransaction,
  getAllTransactionsUser,
};
