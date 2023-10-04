import prisma from '@/lib/prisma';

interface RequestBody {
  id: string;
  name: string;
  email: string;
  image: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const user = await prisma.user.create({
    data: {
      googleId: body.id as string,
      name: body.name as string,
      email: body.email as string,
      image: body.image as string,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  if (user) {
    return new Response(JSON.stringify(true));
  } else {
    return new Response(JSON.stringify(null));
  }
}

/* 


*/
