import { store } from "@/redux-toolkit/store/store";
import { AppProps } from "next/app";
import { Component } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

 

export default function APP ({Component,pageProps}:AppProps){
    const queryclient=new QueryClient

return(
  <Provider store={store}>

    <QueryClientProvider client={queryclient}>
      <Component {...pageProps}/>
    </QueryClientProvider>
    </Provider>
    
)

}