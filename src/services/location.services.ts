import { API_PATHS } from "@/constants/api/paths";
import { ApiUtils } from "@/utils/api";

import { getApiInstanceForJSON } from "./api";

async function getLocationForDropdown(queryObj?: any) {
  const query = ApiUtils.queryMaker(queryObj);
  const response = await getApiInstanceForJSON().get(`${API_PATHS.LOCATION_FOR_DROPDOWNS}${query}`);
  return response;
}

export const LocationServices = { getLocationForDropdown };
