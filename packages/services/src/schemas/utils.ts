import z from "zod";

const AddressSchema = z.object({
  name: z.string().optional(),
  street: z.string(),
  line2: z.string().optional(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

export { AddressSchema };
