import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, userInformation) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", userInformation);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}