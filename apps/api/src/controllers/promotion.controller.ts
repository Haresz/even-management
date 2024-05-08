import { Request, Response } from 'express';
import prisma from '../prisma';

const addPromotion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, startDate, endDate, codeReferal, discount } = req.body;
  console.log(id);
  try {
    const repoAddPromotion = await prisma.promotions.create({
      data: {
        name,
        eventId: parseInt(id),
        discount,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        codeReferal,
      },
    });

    return res.status(200).send({
      status: 200,
      success: true,
      message: 'get all transactions successfuly',
      data: repoAddPromotion,
    });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: 'server error',
      error: (error as Error).message,
    });
  }
};

export default {
  addPromotion,
};
