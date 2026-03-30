import type { AuthSchemaType } from "@/form/auth/hookform";
import type { AuthResponseType } from "@/types/auth-types";

import { ACCESS_TOKEN, EXPIRE_IN, ORGANIZATIONS, PERMISSIONS, USER } from "@/constants/storage";
import { setCookie, setLocalStorage } from "@/utils/storage";

import { getApiInstanceForJSON } from "./api";

async function login(data: AuthSchemaType) {
  const response = await getApiInstanceForJSON().post("/auth/login", data);

  if (response && response.status && Number(response.status) === 200) {
    const { access_token, expires_in, organizations, permissions, user } = response.data as AuthResponseType;

    setCookie(ACCESS_TOKEN, access_token);
    setLocalStorage(USER, user);
    setLocalStorage(EXPIRE_IN, expires_in);
    setLocalStorage(ORGANIZATIONS, organizations);
    setLocalStorage(PERMISSIONS, permissions);
  }
}

export const AuthService = { login };
