import type { FileWithPath } from "react-dropzone";

import { API_PATHS } from "@/constants/api/paths";

import { getApiInstanceForMultipart } from "./api";

async function uploadImage(file: FileWithPath, folder: string) {
  const formData = new FormData();
  formData.append("folder", folder);
  formData.append("image", file, file.name);

  const response = await getApiInstanceForMultipart().post(API_PATHS.UPLOAD_IMAGE, formData);

  return response;
}

async function uploadVideo(file: FileWithPath, folder: string) {
  const formData = new FormData();
  formData.append("folder", folder);
  formData.append("video", file, file.name);

  const response = await getApiInstanceForMultipart().post(API_PATHS.UPLOAD_VIDEO, formData);

  return response;
}

export const FileUploadServices = { uploadImage, uploadVideo };
