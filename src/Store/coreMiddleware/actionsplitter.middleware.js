export const actionSplitterMiddleware = () => (next) => (action) => {
  if (Array.isArray(action)) {
    action.forEach((action) => {
      // console.log('actionSplitterMiddleware', action.type);
      next(action);
    });
  } else {
    // console.log('actionSplitterMiddleware', action.type);
    next(action);
  }
};
