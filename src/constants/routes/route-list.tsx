import { lazy } from "react";

import { campaignRoutes } from "@/features/campaigns/campaigns.routes";
import { certificatesRoutes } from "@/features/certificates/certificates.routes";
import { contentsRoutes } from "@/features/contents/contents.routes";
import { formRoutes } from "@/features/forms/form.routes";
import { marketPriceRouteList } from "@/features/market-prices/market-prices.routes";
import { organizationRouteList } from "@/features/organizations/organization.routes";
import { qnaRoutes } from "@/features/qna/qna.routes";
import { quizRoutes } from "@/features/quizs/quizs.routes";
import { seriesRoutes } from "@/features/series/series.routes";
import { settingsRoutes } from "@/features/settings/settings.routes";
import { systemUsersRoutes } from "@/features/settings/system-users/system-users.routes";
import { testRoutes } from "@/features/test/test.routes";

import { appUsersRoutes } from "../../features/app-users/app-users.routes";
import { ROUTE_PATHS } from "./route-paths";

// ROUTE PAGES
export const NotMatch = lazy(() => import("@/pages/not-match"));

export const Login = lazy(() => import("../../pages/auth/login"));

export const Dashboard = lazy(() => import("../../pages/dashboard"));

export const TestPage = lazy(() => import("../../pages/test"));

// ROUTE LISTS

export const PUBLIC_ROUTES = [{ path: ROUTE_PATHS.NOT_MATCH, element: <NotMatch /> }];

export const UNPROTECTED_ROUTES = [{ path: ROUTE_PATHS.LOGIN, element: <Login /> }];

export const PROTECTED_ROUTES = [
  { path: ROUTE_PATHS.DASHBOARD, element: <Dashboard /> },
  ...organizationRouteList,
  ...settingsRoutes.list,
  ...systemUsersRoutes.list,
  ...appUsersRoutes.list,
  ...contentsRoutes.list,
  ...campaignRoutes.list,
  ...seriesRoutes.list,
  ...qnaRoutes.list,
  ...formRoutes.list,
  ...testRoutes.list,
  ...quizRoutes.list,
  ...certificatesRoutes.list,
  ...marketPriceRouteList,
  {
    path: "/test",
    element: <TestPage />,
  },

];
