import type { NextPage } from "next";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Congratulations</title>
      </Head>
      <div className=" flex flex-col h-screen items-center justify-center">
        <h1 className="text-3xl sm:text-6xl">Hello</h1>
        <p className="sm:text-xl">Congratulations, you&apos;ve signed in</p>
        <p className="text-center sm:text-xl">
          {`logged as : ${session?.user?.email}`}{" "}
        </p>
        <button
          className="bg-black text-white py-3 px-8 rounded mt-4 text-lg"
          onClick={() => signOut({ callbackUrl: "/credential/signin" })}
        >
          logout
        </button>
      </div>
    </>
  );
};

export default Home;
