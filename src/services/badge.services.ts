import { API_PATHS } from "@/constants/api/paths";

import { getApiInstanceForJSON } from "./api";

async function get() {
  const response = await getApiInstanceForJSON().get(API_PATHS.BADGES);
  return response;
}

export const BadgeServices = { get };
