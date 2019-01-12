import streams from "../apis/streams";

import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types";

export const signIn = userId => ({ type: SIGN_IN, payload: userId });
export const signOut = () => ({ type: SIGN_OUT });

export const createStream = formValues => async dispatch => {
  const { data } = await streams.post('/streams', formValues);
  dispatch({ type: CREATE_STREAM, payload: data });
};
