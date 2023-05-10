const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'DO_SOMETHING':
      next(action);
      break;

    default:
      next(action);
  }
};

export default userMiddleware;
