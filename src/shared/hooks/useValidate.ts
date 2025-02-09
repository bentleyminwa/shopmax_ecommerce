import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one letter and one number"
    ),
});

export type FormFields = z.infer<typeof schema>;

export const useValidate = () => {
  return {
    schema,
  };
};
