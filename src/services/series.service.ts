import { API_PATHS } from "@/constants/api/paths";
import { ApiUtils } from "@/utils/api";

import { getApiInstanceForJSON } from "./api";

async function getSeriesForDropDown(queryObj?: any) {
  const query = ApiUtils.queryMaker(queryObj);
  const response = await getApiInstanceForJSON().get(`${API_PATHS.SERIES_FOR_DROPDOWNS}${query}`);
  return response;
}

export const SeriesServices = { getSeriesForDropDown };
