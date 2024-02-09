import { createSlice } from "@reduxjs/toolkit";
import { userSliceData } from "../interface/interface";

import { LogData } from "@/api/functions/function";



const initialState: userSliceData = {
    // accessToken: null,
    UserData: null,
    isLoggedIn: false

}



export const authslice = createSlice({

    name: "login",
    initialState,

    reducers:
    {
        setLogInData: (state, { payload }) => {
            state.UserData = payload.userData;
            // state.accessToken = payload.accessToken;
            state.isLoggedIn = Boolean(payload.userData)
        }

    }

})

export const { setLogInData } = authslice.actions

export default authslice.reducer