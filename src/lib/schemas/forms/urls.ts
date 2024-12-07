import { object, string, z } from "zod";

export const formUrlSchema = object({
	url: string().url("Please enter a valid URL"),
});

export type FormUrlData = z.infer<typeof formUrlSchema>;
