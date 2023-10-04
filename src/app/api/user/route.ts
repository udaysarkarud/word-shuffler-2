import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
interface RequestBody {
  name: String;
  email: String;
  password: String;
}
export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const user = await prisma.user.create({
    data: {
      name: body.name as string,
      email: body.email as string,
      password: await bcrypt.hash(body.password as string, 10),
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...rest } = user;
  return new Response(JSON.stringify(rest));
}
