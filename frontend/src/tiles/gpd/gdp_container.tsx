import styled from "styled-components";
import React, { useEffect, useState } from "react";
import useFetchApi from "hooks/useFetchApi";
import { GDPResponseT } from "types/ApiTypes";
import Loading from "components/display/loading";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";

export interface GdpContainerProps {
  modalOpen: boolean;
}

export const GdpContainer = (props: GdpContainerProps) => {
  const { modalOpen } = props;
  const [gdpData, setGdpData] = useState<GDPResponseT>();
  const [fetchGDPResponse, fetchGDPLoading, fetchGDP] = useFetchApi<GDPResponseT>(`/fred/gdp-tile-data`);
  console.log(modalOpen);

  useEffect(() => {
    fetchGDP();
  }, [fetchGDP]);

  useEffect(() => {
    if (fetchGDPResponse.success && fetchGDPResponse.data) {
      setGdpData(fetchGDPResponse.data);
    }
  }, [fetchGDPResponse]);

  const SimpleLineChart = ({ data }: any) => {
    const chartData = {
      labels: data.observations.map((obs: any) => obs.date),
      datasets: [
        {
          label: "GDP",
          data: data.observations.map((obs: any) => parseFloat(obs.value)),
          fill: false,
          backgroundColor: "rgb(75, 192, 192)",
          borderColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    };
    console.log(chartData);

    const options: any = {
      scales: {
        x: {
          type: "timeseries",
          time: {
            parser: "YYYY-MM-DD",
            unit: "month",
          },
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    return <Line data={chartData} options={options} />;
  };

  return !gdpData ? (
    <div>Loading...</div>
  ) : (
    <StyledGdpContainer>
      GDPC1
      {/* <SimpleLineChart data={gdpData} /> */}
      <Loading show={fetchGDPLoading} />
    </StyledGdpContainer>
  );
};

export default GdpContainer;

const StyledGdpContainer = styled.div``;
