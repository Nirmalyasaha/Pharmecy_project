import { getCookie } from "@/lib/util.lib";
import axios from "axios";




// const axiosInstance=axios.create({
//     baseURL:process.env.GAME_API_URL
// })

// axiosInstance.interceptors.request.use((config)=>{

//     const token= [process.env.GAME_TOKEN];
//     if (token && !!config.headers){
//         config.headers["Authorization"]=`Bearer ${token}`;
//     }
//     return config;
// })

// export default axiosInstance

export const axiosInstance=axios.create({
    baseURL:process.env.LOGIN_API_URL
})


axiosInstance.interceptors.request.use((config)=>{
    // const  token=[process.env.BRANCH_TOKEN];
    const token=getCookie("accessToken")
    if(token && !! config.headers){
        config.headers["Authorization"]=`${token}`
    }
    //console.log(config)
    return config;
    
})

export default axiosInstance