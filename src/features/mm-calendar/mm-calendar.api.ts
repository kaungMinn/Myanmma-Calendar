import { newInstanceForJSON } from "@/api/instance";

export async function getPublicHolidays(year: string | number) {
  // Final URL: /api/v1/holidays/2022
  const response = await newInstanceForJSON.get(`/api/v1/holidays/${year}`);
  return response.data;
}
