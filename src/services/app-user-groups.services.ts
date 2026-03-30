import { API_PATHS } from "@/constants/api/paths";
import { ApiUtils } from "@/utils/api";

import { getApiInstanceForJSON } from "./api";

async function get(queryObj: any) {
  const query = ApiUtils.queryMaker(queryObj);
  const response = await getApiInstanceForJSON().get(`${API_PATHS.APP_USER_GROUPS}${query}`);
  return response;
}

export const AppUserGroupsServices = { get };
