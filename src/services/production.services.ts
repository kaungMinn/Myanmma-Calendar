import { API_PATHS } from "@/constants/api/paths";
import { ApiUtils } from "@/utils/api";

import { getApiInstanceForJSON } from "./api";

async function getOptions(queryObj: any) {
  const query = ApiUtils.queryMaker(queryObj);
  const response = await getApiInstanceForJSON().get(`${API_PATHS.PRODUCTION_OPTIONS}${query}`);
  return response;
}

export const ProductionServices = { getOptions };
