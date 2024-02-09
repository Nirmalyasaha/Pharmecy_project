
import { LogData } from "@/api/functions/function"
import { useAppSelector } from "@/hooks/redux/useAppSelector"
import { useappDisPatch } from "@/hooks/redux/useappDispatch"
import Wraper from "@/layout/wraper/wraper"
import { setLogInData } from "@/redux-toolkit/authSlice/authSlice"
import { log } from "console"

import { useForm, SubmitHandler } from "react-hook-form"
import { useSelector } from "react-redux"
import { redirect } from 'next/navigation'
import { setCookieClient } from "@/lib/util.lib"



type Inputs = {
    email: string
    password: string
}


export default function App() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const xyz = useAppSelector((state) => state?.authSlice);
    console.log("xyz", xyz);


    // console.log(isLoggedIn, UserData, accessToken, "state data");

    const dispatch = useappDisPatch()

    const onSubmit = (data: Inputs) => {
        LogData(data)?.then((response) => {
            const data = response?.data
            if (data?.status === "success") {
                dispatch(setLogInData({
                    userData: data?.data,
                }))
                //login success
                setCookieClient("accessToken", data?.data?.access);
            }
        })?.catch((e) => {
            //login failed

            console.error(e)
        })
        // redirect("/branchdetail")


    }

    //console.log(watch("email")) // watch input value by passing the name of it

    return (

        <Wraper>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder="email id"{...register("email")} />

                <input type="text" placeholder="password"{...register("password")} />


                {/* <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>} */}


                <input type="submit" />
            </form>
        </Wraper>
    )
}