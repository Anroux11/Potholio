import { handleActions } from "redux-actions";
import { INITIAL_STATE, IImageStateContext } from "./context";
import { ImageActionEnums } from "./actions";

export const ImageReducer = handleActions<
  IImageStateContext,
  IImageStateContext
>(
  {
    [ImageActionEnums.uploadImagePending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ImageActionEnums.uploadImageSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ImageActionEnums.uploadImageError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    // [IncidentActionEnums.getIncidentPending]: (state, action) => ({
    //   ...state,
    //   ...action.payload,
    // }),
    // [IncidentActionEnums.getIncidentSuccess]: (state, action) => ({
    //   ...state,
    //   ...action.payload,
    // }),
    // [IncidentActionEnums.getIncidentError]: (state, action) => ({
    //   ...state,
    //   ...action.payload,
    // }),
    // [IncidentActionEnums.updateIncidentPending]: (state, action) => ({
    //   ...state,
    //   ...action.payload,
    // }),
    // [IncidentActionEnums.updateIncidentSuccess]: (state, action) => ({
    //   ...state,
    //   ...action.payload,
    // }),
    // [IncidentActionEnums.updateIncidentError]: (state, action) => ({
    //   ...state,
    //   ...action.payload,
    // }),
  },
  INITIAL_STATE
);
