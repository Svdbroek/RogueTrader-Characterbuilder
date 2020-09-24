import { CREATE } from "../actiontypes";
import { apiRequest, API_SUCCESS } from "../api/api.actions";
import { redirect } from "../app/app.acs";
import { CHARACTER } from "./charatcterBuilder.actions";

export const characterBuilderMiddleware = ({ dispatch, getstate }) => (
  next
) => (action) => {
  next(action);
  switch (action.type) {
    case `${CHARACTER} ${CREATE}`: {
      next(
        apiRequest({
          url: `/character/new`,
          method: "POST",
          entity: action.meta.entity,
          subEntity: action.meta.subEntity,
        })
      );
      break;
    }

    case `${CHARACTER} ${CREATE} ${API_SUCCESS}`: {
      next([redirect("/build")]);
      //and put the response in store
      break;
    }
    default: {
      break;
    }
  }
};
