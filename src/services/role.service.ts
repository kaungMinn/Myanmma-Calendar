import { API_PATHS } from "@/constants/api/paths";

import { getApiInstanceForJSON } from "./api";

async function get() {
  const response = await getApiInstanceForJSON().get(API_PATHS.ROLES);
  return response;
}

export const RolesServices = { get };
