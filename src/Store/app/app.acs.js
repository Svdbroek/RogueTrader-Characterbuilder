export const APP = "[APP]";
export const REDIRECT = "[Redirect]";
export const LOGOUT = "[Logout]";

export const redirect = (route) => ({
  type: `${APP} ${REDIRECT}`,
  payload: route,
  meta: { entity: APP },
});

export const logOut = () => ({
  type: `${APP} ${LOGOUT}`,
  meta: { entity: APP },
});
