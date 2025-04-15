"use server";

import { auth } from "@/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <h1>NextAuth v5 + Next 15</h1>
      <p>User signed in with name: {session?.user?.name}</p>
      <p>User signed in with image url: {session?.user?.image}</p>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          height={48}
          width={48}
          alt="user photo"
        />
      )}
    </div>
  );
}
