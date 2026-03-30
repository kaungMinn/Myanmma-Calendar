// =================
// PROTECTED ROUTES
const DASHBOARD = "/dashboard";
// ==================
// UNPROTECTED ROUTES
const LOGIN = "/auth/login";
// =================
// PUBLIC ROUTES
const NOT_MATCH = "*";
// Settings
const SETTINGS = "/settings";

const CONTENT_CATEGORIES = `${SETTINGS}/content-categories`;

const SYSTEM_USERS = `${SETTINGS}/system-users`;
const CREATE_SYSTEM_USERS = `${SYSTEM_USERS}/create`;
const UPDATE_SYSTEM_USERS = `${SYSTEM_USERS}/update/:id`;

const APP_USERS = `/app-users`;
const CREATE_APP_USERS = `${APP_USERS}/create`;
const UPDATE_APP_USERS = `${APP_USERS}/update/:id`;
const DETAILS_APP_USERS = `${APP_USERS}/details/:id`;

const CONTENTS = "/contents";
const CREATE_CONTENT = `${CONTENTS}/create`;
const UPDATE_CONTENT = `${CONTENTS}/update/:id`;
const DETAILS_CONTENT = `${CONTENTS}/delete/:id`;

export const ROUTE_PATHS = {
  DASHBOARD,

  SETTINGS,

  SYSTEM_USERS,
  CREATE_SYSTEM_USERS,
  UPDATE_SYSTEM_USERS,

  APP_USERS,
  CREATE_APP_USERS,
  UPDATE_APP_USERS,
  DETAILS_APP_USERS,

  CONTENTS,
  CREATE_CONTENT,
  UPDATE_CONTENT,
  DETAILS_CONTENT,
  CONTENT_CATEGORIES,

  LOGIN,
  NOT_MATCH,
};
