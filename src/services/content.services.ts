import type { ContentFormType } from "@/features/contents/form/hookform";

import { API_PATHS } from "@/constants/api/paths";
import { ApiUtils } from "@/utils/api";

import { getApiInstanceForJSON } from "./api";

async function get(queryObj: any) {
  const query = ApiUtils.queryMaker(queryObj);

  const response = await getApiInstanceForJSON().get(`${API_PATHS.CONTENTS}${query}`);

  return response;
}

async function createContent(data: ContentFormType) {
  const response = await getApiInstanceForJSON().post(API_PATHS.CONTENTS, data);

  return response;
}

async function updateContent(data: ContentFormType, id: string) {
  const response = await getApiInstanceForJSON().put(`${API_PATHS.CONTENTS}/${id}`, data);

  return response;
}

async function deleteContent(id: string | number) {
  const response = await getApiInstanceForJSON().delete(`${API_PATHS.CONTENTS}/${id}`);
  return response;
}

async function getContentDetail(id: string) {
  const response = await getApiInstanceForJSON().get(`${API_PATHS.CONTENTS}/${id}`);
  return response;
}

async function getContentCategoriesList(queryObj: any) {
  const query = ApiUtils.queryMaker(queryObj);
  const response = await getApiInstanceForJSON().get(`${API_PATHS.CONTENTS_CATEGORIES_LIST}${query}`);
  return response;
}

export const ContentServices = {
  get,
  getContentCategoriesList,
  getContentDetail,
  createContent,
  updateContent,
  deleteContent,
};
