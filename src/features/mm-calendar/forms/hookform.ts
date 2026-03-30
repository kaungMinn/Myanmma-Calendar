import { z } from "zod";

export const mmCalendarFilterFormSchema = z.object({
  year: z.string().default("2026"),
});

export type MMCalendarFilterFormTypes = z.infer<typeof mmCalendarFilterFormSchema>;

export const mmCalendarFilterFormDefaultValues: MMCalendarFilterFormTypes = {
  year: "2026",
};
