import { API_PATHS } from "@/constants/api/paths";

import { getApiInstanceForJSON } from "./api";

async function getPests() {
  const response = await getApiInstanceForJSON().get(`${API_PATHS.PEST_NAMES}`);
  return response;
}

export const PestServices = { getPests };
