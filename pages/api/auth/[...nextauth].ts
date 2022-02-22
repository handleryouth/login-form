import NextAuth from "next-auth";
import { dbConnect } from "lib";
import { users } from "models";
import bcryptjs from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        await dbConnect();
        const result = await users.findOne({
          email: credentials!.email,
        });

        if (!result) {
          throw new Error("No user found with the email");
        } else if (
          !bcryptjs.compareSync(credentials!.password, result.password)
        ) {
          throw new Error("Wrong password, please try again");
        }

        return result;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    jwt: async ({ token, user }) => {
      //first time jwt callback is run, user object is available
      // persists the _id of the user in the token
      if (user) {
        token._id = user._id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session._id = token._id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
});
