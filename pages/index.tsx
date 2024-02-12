
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
import { Box } from "@mui/material"
import { Router, useRouter } from "next/router"




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

    const router=useRouter()

    const onSubmit = (data: Inputs) => {
        LogData(data)?.then((response) => {
            const data = response?.data
            if (data?.status === "success") {
                dispatch(setLogInData({
                    userData: data?.data,
                }))
                //login success
                setCookieClient("accessToken", data?.data?.access);
                router.push("/branchdetail")
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

            <Box className="logInForm" style={{backgroundColor:"yellow",border:"1px solid black",width:"300px",height:"100px",margin:"auto"}}>

                <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

                    <input type="text" placeholder="email id"{...register("email")}
                    style={{margin:"8px",padding:"8px,",border:"1px solid black",}} />

                    <input type="text" placeholder="password"{...register("password")} 
                     style={{margin:"8px",padding:"8px,",border:"1px solid black",}} />

                    <input type="submit" />
                </form>

            </Box>


            {/* <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>} */}


        </Wraper>
    )
}