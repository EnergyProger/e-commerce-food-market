const AppRoutes = {
  HOME: "home",
  LOGIN: "login",
  NOT_FOUND: "not_found",
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOGIN]: "/login",

  //should be last
  [AppRoutes.NOT_FOUND]: "*",
};

export { AppRoutes, routePaths };
