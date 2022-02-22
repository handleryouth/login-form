import { users } from "models";
import { dbConnect } from "lib";

export const resolvers = {
  Mutation: {
    createCredentials: async (_parent: any, args: any) => {
      await dbConnect();
      const existUser = await users.findOne({ email: args.input.email });
      if (existUser) {
        return new Error("user already exists");
      }
      await users.create(args.input);
      return "success";
    },
  },
};
