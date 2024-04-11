import { NextFunction, Request, Response } from 'express';
import prisma from '../prisma';

const addreview = async (req: Request, res: Response) => {
  const { eventId, userId } = req.params;
  const { rating, feedBack } = req.body;
  try {
    if (!eventId || !userId) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Invalid input id',
      });
    }
    const repoAddReview = await prisma.reviews.create({
      data: {
        eventId: parseInt(eventId),
        userId: parseInt(userId),
        rating,
        feedBack,
      },
    });
    return res.status(201).send({
      status: 201,
      success: true,
      message: 'add review successfully',
      data: repoAddReview,
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

const updateReview = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { rating, feedBack } = req.body;
  try {
    if (!id) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Invalid id',
      });
    }
    const repoUpdateReview = await prisma.reviews.update({
      where: { id: parseInt(id) },
      data: { rating, feedBack },
    });
    return res.status(201).send({
      status: 201,
      success: true,
      message: 'add review successfully',
      data: repoUpdateReview,
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

const deleteReview = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Invalid id',
      });
    }
    const repoDeleteReview = await prisma.reviews.delete({
      where: { id: parseInt(id) },
    });
    return res.status(201).send({
      status: 201,
      success: true,
      message: 'Delete review successfully',
      data: repoDeleteReview,
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

const getAllReview = async (req: Request, res: Response) => {
  try {
    const repoGetAll = await prisma.reviews.findMany();
    return res.status(200).send({
      status: 200,
      success: true,
      message: 'get review successfully',
      data: repoGetAll,
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

const getReviewEvent = async (req: Request, res: Response) => {
  const { eventId } = req.params;
  try {
    if (!eventId) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Invalid id',
      });
    }
    const repoReviewevent = await prisma.reviews.findMany({
      where: { eventId: parseInt(eventId) },
    });
    return res.status(200).send({
      status: 200,
      success: true,
      message: 'get review successfully',
      data: repoReviewevent,
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

const findIdReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const repoFindId = await prisma.reviews.findUnique({
      where: { id: parseInt(id) },
    });
    if (!id || !repoFindId) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Invalid id',
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
  addreview,
  getAllReview,
  getReviewEvent,
  updateReview,
  deleteReview,
  findIdReview,
};
