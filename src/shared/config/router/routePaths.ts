const AppRoutes = {
  HOME: "home",
  LOGIN: "login",
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOGIN]: "/login",
};

export { AppRoutes, routePaths };
