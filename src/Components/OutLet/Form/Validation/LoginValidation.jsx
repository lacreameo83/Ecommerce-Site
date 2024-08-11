import { z } from "zod";
export const formSchema = z.object({
  firstname: z.string().min(1, { message: "First name is requried" }),
  lastname: z.string().min(1, { message: "Last name is requried" }),
  phoneNmuber: z
    .string()
    .min(11, { message: "Phone number must be 11 character" }),
  email: z.string().email({ message: "email is requried" }),
  password: z
    .string()
    .min(6, { message: "password is require must be up to 6 charavters" }),
});
