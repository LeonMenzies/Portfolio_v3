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

  return (
    <StyledGdpContainer className="window">
      <div className="title-bar">
        <div className="title-bar-text">A Window With Stuff In It</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <p>There's so much room for activities!</p>
      </div>
    </StyledGdpContainer>
  );
};

export default GdpContainer;

const StyledGdpContainer = styled.div``;
