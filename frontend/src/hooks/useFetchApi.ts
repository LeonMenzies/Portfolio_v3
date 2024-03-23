import { useState, useCallback } from "react";
import axios from "axios";
import { ApiResponse } from "../types/ApiTypes";

export const useFetchApi = <T>(endpoint: string, initialParams: Record<string, unknown> = {}): [ApiResponse<T>, boolean, (params?: Record<string, unknown>) => Promise<void>] => {
  const [results, setResults] = useState<ApiResponse<T>>({
    success: false,
    errorMessage: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(
    async (params: Record<string, unknown> = initialParams) => {
      try {
        setLoading(true);

        const response = await axios.request<ApiResponse<T>>({
          method: "GET",
          url: process.env.REACT_APP_URL_BASE + endpoint,
          params,
          withCredentials: true,
        });

        if (!response.data.success) {
          throw new Error(response.data.errorMessage || "Failed to fetch");
        }

        setResults(response.data);
      } catch (error: unknown) {
        setResults({
          success: false,
          errorMessage: "Failed to fetch products",
        });
      } finally {
        setLoading(false);
      }
    },
    [endpoint]
  );

  return [results, loading, fetchProducts];
};

export default useFetchApi;
