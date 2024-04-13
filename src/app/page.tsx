import { Button } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export default async function Home() {

  const cources = await client.course.findMany();

  console.log(cources);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Button</Button>
    </main>
  );
}
