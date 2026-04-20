import { z } from "zod";

export const signupSchema = z
  .object({
    name: z.string().min(3, "Name too short"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password too short"),
    rePassword: z.string(),
    phone: z
      .string()
      .regex(/^01[0-2,5]{1}[0-9]{8}$/, "Invalid Egyptian phone number"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });