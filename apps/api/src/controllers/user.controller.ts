import { NextFunction, Request, Response } from 'express';
import prisma from '../prisma';

const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(403).send({
        status: 401,
        success: false,
        message: 'input invalid',
      });
    }
    const addUser = await prisma.users.create({
      data: {
        username,
        email,
        password,
        referrallCode: 'AWEAWE',
        points: '0',
      },
    });
    return res.status(201).send({
      status: 201,
      success: true,
      message: 'register successfully',
      data: addUser,
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

const loginUser = async (req: Request, res: Response) => {
  const { email, password }: { email: string; password: string } = req.body;
  try {
    const existingUser: any = await prisma.users.findUnique({
      where: { email },
    });

    if (!existingUser && password != existingUser.password) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'invalid email or password',
      });
    }
    delete existingUser.password;
    return res.status(201).send({
      status: 201,
      success: true,
      message: 'login successfully',
      data: existingUser,
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

const findUniqeId = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const repoFindId = await prisma.users.findUnique({
      where: { id: parseInt(id) },
    });
    if (!id || !repoFindId) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'invalid email or password',
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
  registerUser,
  loginUser,
  findUniqeId,
};
