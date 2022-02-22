import type { NextPage } from "next";
import { FormContainer } from "components";
import Image from "next/image";
import Head from "next/head";
import backgroundimage from "../../public/bg-intro-desktop.png";

const NewUser: NextPage = () => {
  return (
    <>
      <Head>
        <title>Signup Page</title>
      </Head>
      <div className="flex flex-col xl:flex-row p-3 items-center justify-center min-h-screen bg-red-400 w-full relative">
        <Image
          src={backgroundimage}
          alt="background pattern"
          layout="fill"
          objectFit="cover"
        />

        <div className="text-white text-center xl:w-1/2 xl:text-left z-10">
          <h1 className="text-4xl xl:text-6xl pt-4 xl:pt-0 font-bold  leading-tight">
            Learn to code by watching others
          </h1>
          <p className="min-w-[320px]  mb-4 xl:mb-0 mx-auto w-11/12 xl:max-w-[40rem] mt-4 xl:text-xl">
            See how experieced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable
          </p>
        </div>

        <div className="z-10">
          <div className="bg-violet-500 text-center py-4 rounded-md text-white">
            <span className="font-semibold">Try it free 7 days</span> then
            $20/mo. thereafter
          </div>
          <FormContainer />
        </div>
      </div>
    </>
  );
};

export default NewUser;
