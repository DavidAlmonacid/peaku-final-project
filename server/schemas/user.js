import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  password: z.string().min(8)
});

export const validateUser = (object) => {
  return userSchema.safeParse(object);
};

export const validatePartialUser = (object) => {
  return userSchema.partial().safeParse(object);
};
