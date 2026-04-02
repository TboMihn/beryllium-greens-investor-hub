import { z } from "zod";

export const contactInterestOptions = ["Investment", "Partnership", "Agritourism", "General"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be 100 characters or fewer"),
  email: z.string().trim().min(1, "Email is required").max(255, "Email must be 255 characters or fewer").email("Please enter a valid email address"),
  phone: z.string().trim().max(30, "Phone number must be 30 characters or fewer").optional().or(z.literal("")),
  interest: z.enum(contactInterestOptions).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be 1000 characters or fewer"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;