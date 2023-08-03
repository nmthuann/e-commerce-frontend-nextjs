import { useState, useEffect, useCallback } from "react";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

interface UseAxiosProps {
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

const useAxios = (configObj: UseAxiosProps) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;

  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reload, setReload] = useState<number>(0);

  // Để chạy lại useEffect bên dưới
  const refetch = useCallback(() => {
    setReload((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController(); //dùng đến khi cần dừng 1 request
    const token = localStorage.getItem("token");
    //const token = 'abcxyz';
    const fetchData = async () => {
      try {
        const res: AxiosResponse = await axiosInstance({
          method: method.toLowerCase(),
          url: url,
          data: requestConfig ? requestConfig.data : null,
          params: requestConfig ? requestConfig.params : null,
          signal: controller.signal,
          headers: {
            //authorization: token ? `${token}` : "",
            'Authorization': `Bearer ${token}`,
          },
        });

        setResponse(res.data);
        setError(null);
      } catch (err: AxiosError | any) {
        setError(err.response as ErrorResponse);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    //Khi component unmount câu lệnh sau sẽ chạy
    //và ngăn memory leak
    return () => controller.abort();
    // eslint-disable-next-line
  }, [axiosInstance, method, url, reload]);

  return { response, isLoading, error, refetch };
};

export default useAxios;
