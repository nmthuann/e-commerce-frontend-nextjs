import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosInstance, AxiosError, AxiosResponse } from "axios";

interface UseAxiosFunctionProps {
  axiosInstance: AxiosInstance;
  method: string;
  url: string;
  requestConfig?: AxiosRequestConfig;
}

interface ErrorResponse {
  data: any;
  status: number;
  statusText: string;
  headers: any;
}

const useAxiosFunction = () => {
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [controller, setController] = useState<AbortController | undefined>();

  const axiosFetch = useCallback(async (configObj: UseAxiosFunctionProps) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;
    const token = localStorage.getItem("token");

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);

      const res: AxiosResponse = await axiosInstance({
        method: method.toLowerCase(),
        url: url,
        data: requestConfig ? requestConfig.data : null,
        signal: ctrl.signal,
        params: requestConfig ? requestConfig.params : null,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setResponse(res.data);
      setError(null);
    } catch (err: AxiosError | any) {
      setError(err.response as ErrorResponse);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // useEffect cleanup function
    return () => controller && controller.abort();
  }, [controller]);

  return { response, error, loading, axiosFetch };
};

export default useAxiosFunction;
