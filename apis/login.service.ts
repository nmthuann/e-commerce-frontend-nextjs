import { AxiosInstance } from "axios";
import useAxiosFunction from "../hooks/use-axios-function";

import httpClient from "../lib/axios-instance";

const loginUrl = '/auth/login'




interface LoginResponseData {
  access_token: string;
//   : any;
}

interface LoginServiceResult {
  loginResponse: LoginResponseData | null;
  loginError: any;
  loginIsLoading: boolean | any;
  callLoginRefetch: (dataUser: any) => void;
}

export const LoginService  = async (): Promise<LoginServiceResult> => {
    const { 
        response: loginResponse, 
        error: loginError, 
        loading: loginIsLoading , 
        axiosFetch: loginRefetch 
    } = useAxiosFunction(); 

  const callLoginRefetch = async (dataUser: any) => {
    loginRefetch({
      axiosInstance: httpClient as AxiosInstance, 
      method: 'POST',
      url: '/login',
      requestConfig: { data: dataUser },
    });
  };

  return { loginResponse, loginError, loginIsLoading, callLoginRefetch };
};

