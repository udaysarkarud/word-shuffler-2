import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    // check if the email already exists
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: 'User with this email already exists',
        },
        { status: 409 }
      );
    }

    // check if the username already exists
    const existingUserByUsername = await db.user.findUnique({
      where: { username: username },
    });

    if (existingUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          message: 'User with this username already exists',
        },
        { status: 409 }
      );
    }

    const hashPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        email,
        username,
        password: hashPassword,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: 'User created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Something went wrong',
      },
      { status: 505 }
    );
  }
}
