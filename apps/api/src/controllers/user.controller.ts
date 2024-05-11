import { NextFunction, Request, Response } from 'express';
import { genSalt, hash, compare } from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';

import prisma from '../prisma';

const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(401).send({
        status: 401,
        sucsses: false,
        message: 'email already registered',
      });
    }

    if (!username || !email || !password) {
      return res.status(403).send({
        status: 401,
        success: false,
        message: 'input invalid',
      });
    }

    const salt = await genSalt(10);
    const hashedPassword: string = await hash(password as string, salt);
    console.log(hashedPassword, 'password-reg');
    const addUser = await prisma.users.create({
      data: {
        username,
        email,
        password: hashedPassword,
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

    const isValidPassword = await compare(password, existingUser.password);
    if (!isValidPassword) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'invalid email or password',
      });
    }

    const jwtPayload = { email };
    const token = sign(jwtPayload, String(process.env.KEY_SECRET), {
      expiresIn: '1h',
    });
    delete existingUser.password;
    return res.status(201).send({
      status: 201,
      success: true,
      message: 'login successfully',
      data: existingUser,
      token: token,
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

export const verifyTokenController = async (
  req: Request | any,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Invalid token, unauthorized',
      });
    }

    const verifyedUser = verify(
      token,
      String(process.env.KEY_SECRET),
    ) as User | null;
    if (!verifyedUser) {
      return res.status(401).send({
        status: 401,
        success: false,
        message: 'Expried token or invalid token',
      });
    }

    req.user = verifyedUser;

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      status: 401,
      success: false,
      message: (error as Error).message,
    });
  }
};

export default {
  registerUser,
  loginUser,
  findUniqeId,
};

interface User {
  username: string;
  email: string;
  password: string;
}
