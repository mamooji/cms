import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Please provide a valid email address"),
  phoneNumber: z.string().regex(phoneRegex, "Invalid phone number"),
  address: z.string().min(2, {
    message: " address must be at least 2 characters.",
  }),
  postal: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
