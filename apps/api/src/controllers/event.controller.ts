import { NextFunction, Request, Response } from 'express';
import prisma from '../prisma';

const addEvent = async (req: Request, res: Response, next: NextFunction) => {
  let {
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
    if (
      !eventName ||
      !price ||
      !date ||
      !time ||
      !location ||
      !description ||
      !AvailableTicket ||
      !categoryId
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
        price,
        date,
        time,
        location,
        description,
        AvailableTicket,
        categoryId,
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
      where: { id: parseFloat(req.params.id) },
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

const deleteEvents = async (req: Request, res: Response) => {
  try {
    const repoDetailEvents = await prisma.events.findUnique({
      where: { id: parseFloat(req.params.id) },
    });
    if (!req.params.id || !repoDetailEvents) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'invalid input',
      });
    }
    const repoDelete = await prisma.events.delete({
      where: { id: parseFloat(req.params.id) },
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
  const { eventId } = req.params;
  try {
    const repoFindId = await prisma.events.findUnique({
      where: { id: parseInt(eventId) },
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

export default {
  getAllEvents,
  getDetailEvents,
  addEvent,
  updateEvents,
  deleteEvents,
  findIdEvent,
};
