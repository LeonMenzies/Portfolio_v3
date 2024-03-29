import { useState, useCallback } from "react";
import axios from "axios";
import { ApiResponse } from "../types/ApiTypes";

export const usePostApi = <D, T>(endpoint: string): [ApiResponse<T>, boolean, (data: D) => Promise<void>] => {
  const [results, setResults] = useState<ApiResponse<T>>({
    success: false,
    errorMessage: "",
  });
  const [loading, setLoading] = useState(false);

  const postProducts = useCallback(
    async (data: D) => {
      try {
        setLoading(true);
        const response = await axios.request<ApiResponse<T>>({
          data: data,
          method: "POST",
          url: process.env.REACT_APP_URL_BASE + endpoint,
          withCredentials: true,
        });

        if (!response.data.success) {
          throw new Error(response.data.errorMessage || "Failed to post");
        }

        setResults(response.data);
      } catch (error: any) {
        setResults({
          success: false,
          errorMessage: error.message,
        });
      } finally {
        setLoading(false);
      }
    },
    [endpoint]
  );

  return [results, loading, postProducts];
};

export default usePostApi;
