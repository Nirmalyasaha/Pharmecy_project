import axios, { HttpStatusCode } from "axios";
import { axiosInstance } from "../axiosinstance/axios";
import { endpoint } from "../endpoint/endpoint";





export interface baseApiResponce {
    status: HttpStatusCode;
    data: any
}


export const LogData = async (data: {
    email: string,
    password: string
}) => {
    const res = await axiosInstance.post(endpoint.auth.login, data)
    return res
}


/// 

export const FetchBranchData = async () => {
    const res = await axiosInstance.post(endpoint.Fetch.Branch,{
        page:1,
        length:10,
    })?.then((r)=> r.data)

    return res?.data.docs

}


