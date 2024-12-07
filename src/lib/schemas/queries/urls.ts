import { object, string } from "zod";

export const urlSchema = object({
	url: string().url(),
});

export const validateUrlSchema = (data: unknown) => urlSchema.safeParse(data);
