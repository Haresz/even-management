import { NextFunction, Request, Response } from 'express';
import prisma from '../prisma';

const addEvent = async (req: Request, res: Response, next: NextFunction) => {
  let { eventName, price, date, time, location, description, categoryId } =
    req.body;
  const { file } = req;
  try {
    if (
      !eventName ||
      !price ||
      !date ||
      !time ||
      !location ||
      !description ||
      !categoryId ||
      !file
    ) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'input invalid',
      });
    }
    date = new Date(date);
    const repoAddEvent = await prisma.events.create({
      data: {
        dashboardId: parseInt(req.params.id),
        eventName,
        image: file.path,
        price: parseInt(price),
        date,
        time,
        location,
        description,
        categoryId: parseInt(categoryId),
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

const getAllEvents = async (req: Request, res: Response) => {
  try {
    const repoGetAllEvents = await prisma.events.findMany();
    return res.status(200).send({
      status: 200,
      success: true,
      message: 'get all event successfully',
      data: repoGetAllEvents,
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

const getDetailEvents = async (req: Request, res: Response) => {
  try {
    const repoDetailEvents = await prisma.events.findUnique({
      where: { id: parseFloat(req.params.id) },
      include: { ticket: true },
    });

    return res.status(200).send({
      status: 200,
      success: true,
      message: 'get detail event successfully',
      data: repoDetailEvents,
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

const updateEvents = async (req: Request, res: Response) => {
  const {
    eventName,
    price,
    date,
    time,
    location,
    description,
    AvailableTicket,
    categoryId,
  } = req.body;
  try {
    if (!req.body || !req.params.id) {
      return res.status(401).send({
        status: 401,
        success: true,
        message: 'invalid input',
      });
    }
    const repoUpdateEvent = await prisma.events.update({
      where: { id: parseInt(req.params.id) },
      data: {
        eventName,
        price,
        date,
        time,
        location,
        description,
        AvailableTicket,
        categoryId,
      },
    });
    return res.status(201).send({
      status: 201,
      success: true,
      message: 'Event updated successfully',
      data: repoUpdateEvent,
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

const updateAvailableTicket = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { eventId } = req.params;
  const { ticketType, price, AvailableTicket } = req.body;
  try {
    if (!eventId || (!price && !AvailableTicket && !ticketType)) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Invalid input',
      });
    }
    const agreration: any = await prisma.tickets.aggregate({
      where: { eventId: parseInt(eventId) },
      _sum: {
        AvailableTicket: true,
      },
    });
    const repoUpdateAvailableTicket = await prisma.events.update({
      where: { id: parseInt(eventId) },
      data: { AvailableTicket: agreration._sum.AvailableTicket },
    });

    return res.status(201).send({
      status: 201,
      success: true,
      data: req.body,
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

const deleteEvents = async (req: Request, res: Response) => {
  try {
    const repoDelete = await prisma.events.delete({
      where: { id: parseInt(req.params.id) },
    });
    return res.status(201).send({
      status: 201,
      success: true,
      message: 'Event Delete successfully',
      data: repoDelete,
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

const findIdEvent = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const repoFindId = await prisma.events.findUnique({
      where: { id: parseInt(id) },
    });
    if (!repoFindId) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Event not found',
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

const publishEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Event not found',
      });
    }
    const repoOnPublish = await prisma.events.update({
      where: { id: parseInt(id) },
      data: { published: true },
    });
    return res.status(201).send({
      status: 201,
      success: true,
      message: 'Event Publish successfully',
      data: repoOnPublish,
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

const eventTransaction = async (req: Request, res: Response) => {
  try {
    const { ticketId } = req.params;
    // Find Ticket
    const repoFindTicket: any = await prisma.tickets.findUnique({
      where: { id: parseInt(ticketId) },
    });
    // Find Stock
    const agreration: any = await prisma.tickets.aggregate({
      where: { eventId: parseInt(repoFindTicket.eventId) },
      _sum: {
        AvailableTicket: true,
        sold: true,
      },
    });
    // Update Event
    const repoEventUpdate: any = await prisma.events.update({
      where: { id: parseInt(repoFindTicket.eventId) },
      data: {
        AvailableTicket: agreration._sum.AvailableTicket,
        soldQuantity: agreration._sum.sold,
      },
    });
    // Update Dashboard
    const repoUpdateDhasboard = await prisma.dashboards.update({
      where: {
        id: parseInt(repoEventUpdate.dashboardId),
      },
      data: {
        transactionCount: +1,
      },
    });
    return res.status(201).send({
      status: 201,
      success: true,
      message: 'trasaction success full',
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
  getAllEvents,
  getDetailEvents,
  addEvent,
  updateEvents,
  deleteEvents,
  findIdEvent,
  publishEvent,
  updateAvailableTicket,
};
