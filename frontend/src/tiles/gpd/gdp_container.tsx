import styled from "styled-components";
import React, { useEffect, useState } from "react";

export interface GdpContainerProps {}

export const GdpContainer = (props: GdpContainerProps) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("series_id", "GDPC1");
    params.append("api_key", process.env.REACT_APP_FRED_API_KEY || "");
    params.append("file_type", "json");

    fetch(`/fred_api/fred/series/observations?${params}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return <StyledGdpContainer></StyledGdpContainer>;
};

export default GdpContainer;

const StyledGdpContainer = styled.div``;
