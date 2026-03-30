import { API_PATHS } from "@/constants/api/paths";
import { ApiUtils } from "@/utils/api";

import { getApiInstanceForJSON } from "./api";

async function getForms(queryObj: any) {
  const query = ApiUtils.queryMaker(queryObj);
  const response = await getApiInstanceForJSON().get(`${API_PATHS.FORMS}${query}`);
  return response;
}

export const FormServices = { getForms };
