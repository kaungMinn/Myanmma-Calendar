import { API_PATHS } from "@/constants/api/paths";

import { getApiInstanceForJSON } from "./api";

async function getTags() {
  const response = await getApiInstanceForJSON().get(`${API_PATHS.TAGS}`);
  return response;
}

export const TagServices = { getTags };
