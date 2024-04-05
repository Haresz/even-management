import { Request, Response } from 'express';
import prisma from '../prisma';

const addEvent = async (req: Request, res: Response) => {
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
    return res.status(201).send({
      status: 201,
      success: true,
      message: 'add event successfully',
      data: repoAddEvent,
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
    return res.status(204).send({
      status: 204,
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
    if (!req.params.id) {
      return res.status(401).send({
        status: 401,
        success: true,
        message: 'invalid input',
      });
    }
    const repoDelete = await prisma.events.delete({
      where: { id: parseFloat(req.params.id) },
    });
    return res.status(204).send({
      status: 204,
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

export default {
  getAllEvents,
  getDetailEvents,
  addEvent,
  updateEvents,
  deleteEvents,
};
