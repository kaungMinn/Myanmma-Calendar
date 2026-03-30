import { z } from "zod";

export const schema = z.object({
  email: z.string().nonempty("Email is required"),
  password: z.string().nonempty("Password is required").min(4, "Password must be at least 4"),
});

export type AuthSchemaType = z.infer<typeof schema>;

export const defaultValues: AuthSchemaType = {
  email: "",
  password: "",
};

export const AuthForm = {
  schema,
  defaultValues,
};
