import { NextFunction, Request, Response } from 'express';
import prisma from '../prisma';

const addTicket = async (req: Request, res: Response, next: NextFunction) => {
  const { eventId } = req.params;
  const { ticketType, price, AvailableTicket } = req.body;
  try {
    if (!eventId || !price || !AvailableTicket) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Invalid input',
      });
    }
    const repoAddTicket = await prisma.tickets.create({
      data: { eventId: parseInt(eventId), ticketType, price, AvailableTicket },
    });
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

const updateTicket = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const { ticketType, price, AvailableTicket } = req.body;
  try {
    if (!id || (!price && !AvailableTicket && !ticketType)) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Invalid input',
      });
    }
    const repoUpdateTicket = await prisma.tickets.update({
      where: { id: parseInt(id) },
      data: { ticketType, price, AvailableTicket },
    });
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

const deleteTicket = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Invalid input',
      });
    }
    const repoDeleteTicket = await prisma.tickets.delete({
      where: { id: parseInt(id) },
    });
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

const deleteTicketEvent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Invalid input',
      });
    }
    const repoDeleteTicketEvent = await prisma.tickets.deleteMany({
      where: { eventId: parseInt(id) },
    });
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

const findUniqeTicket = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const repoFindId = await prisma.tickets.findUnique({
      where: { id: parseInt(id) },
    });
    if (!id || !repoFindId) {
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

const ticketTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { ticketId } = req.params;
    const repoFindTicket: any = await prisma.tickets.findUnique({
      where: { id: parseInt(ticketId) },
    });
    const repoUpdateTransaction = await prisma.tickets.update({
      where: { id: parseInt(ticketId) },
      data: {
        AvailableTicket: parseInt(repoFindTicket?.AvailableTicket) - 1,
        sold: parseInt(repoFindTicket.sold) + 1,
      },
    });

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
  addTicket,
  updateTicket,
  deleteTicket,
  deleteTicketEvent,
  findUniqeTicket,
  ticketTransaction,
};
