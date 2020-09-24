// action types
export const API = "[API]";
export const API_REQUEST = `${API} Request`;
export const API_SUCCESS = `${API} Success`;
export const API_ERROR = `${API} Error`;

// action creators
export const apiRequest = ({
  body,
  method = "GET",
  url,
  entity,
  auth = false,
  headers = {},
  responseType = false,
  subEntity = false,
  cmdType = false,
  // docuType = false,
  // evtType = false
}) => {
  return {
    type: `${
      !subEntity
        ? `${entity} ${API_REQUEST}`
        : `${entity} ${subEntity} ${API_REQUEST}`
    }`,
    payload: body,
    meta: {
      method,
      url,
      entity,
      auth,
      headers,
      subEntity,
      cmdType,
      responseType,
    },
  };
};

export const apiSuccess = ({ response, entity, subEntity, cmdType }) => {
  const type = setActionType(entity, subEntity, cmdType, API_SUCCESS);
  return {
    type: type,
    payload: response,
    meta: { entity, subEntity, cmdType },
  };
};

export const apiError = ({ error, entity, subEntity, cmdType }) => {
  const type = setActionType(entity, subEntity, cmdType, API_ERROR);
  return {
    type: type,
    payload: error,
    meta: { entity, subEntity, cmdType },
  };
};

const setActionType = (entity, subEntity, cmdType, status) => {
  if (cmdType && subEntity) {
    return `${entity} ${subEntity} ${cmdType} ${status}`;
  }
  return `${
    !subEntity ? `${entity} ${status}` : `${entity} ${subEntity} ${status}`
  }`;
};
