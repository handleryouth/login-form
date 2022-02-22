import type { NextPage } from "next";
import { Input } from "components";
import { signIn, SignInResponse } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useCallback, useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { CredentialsProperties } from "types";

const Signin: NextPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const [credentials, setCredentials] = useState<CredentialsProperties>({
    email: "",
    password: "",
  });

  const sendLoginVerification = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      signIn("credentials", {
        redirect: false,
        email: credentials?.email,
        password: credentials?.password,
      }).then((response: SignInResponse | undefined) => {
        response?.error ? setErrorMessage(response.error) : router.push("/");
      });
    },
    [credentials?.email, credentials?.password, router]
  );

  return (
    <>
      <Head>
        <title>Signin Page</title>
      </Head>
      <div className="px-2 flex flex-col items-center h-screen justify-center">
        <h1 className="text-2xl font-bold">Login page</h1>
        <form onSubmit={sendLoginVerification}>
          <Input
            icon={<RiErrorWarningFill />}
            label="Email"
            placeholder="Email"
            validator="email"
            toggleFunction={(value) =>
              setCredentials({ ...credentials, email: value })
            }
          />
          <Input
            icon={<RiErrorWarningFill />}
            label="Password"
            placeholder="Password"
            type="password"
            validator="password"
            toggleFunction={(value) =>
              setCredentials({ ...credentials, password: value })
            }
          />

          {errorMessage && (
            <p className="text-center  text-red-500">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="bg-black text-white p-2 my-2 rounded w-full text-center"
          >
            Login
          </button>
          <p className="w-full text-center text-sm sm:text-md ">
            don&apos;t have account ?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                router.push("/credential/newuser");
              }}
            >
              click here to login
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signin;
