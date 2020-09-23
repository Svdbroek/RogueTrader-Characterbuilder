export const APP = "[APP]";
export const REDIRECT = "[Redirect]";

export const redirect = (route) => ({
  type: `{APP} {REDIRECT}`,
  payload: route,
  meta: { entity: APP },
});
