import { API_PATHS } from "@/constants/api/paths";
import { ApiUtils } from "@/utils/api";

import { getApiInstanceForJSON } from "./api";

async function getAllQna(queryObj: any) {
  const query = ApiUtils.queryMaker(queryObj);
  const response = await getApiInstanceForJSON().get(`${API_PATHS.QNA}${query}`);
  return response;
}

async function getQnaDetail(id: string | number) {
  const response = await getApiInstanceForJSON().get(`${API_PATHS.QNA}/${id}`);
  return response;
}

export const QnaServices = { getAllQna, getQnaDetail };
