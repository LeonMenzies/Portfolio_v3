import styled from "styled-components";
import React, { useEffect, useState } from "react";
import useFetchApi from "hooks/useFetchApi";
import { GDPResponseT } from "types/ApiTypes";
import Loading from "components/display/loading";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

export interface GdpContainerProps {
  modalOpen: boolean;
}

export const GdpContainer = (props: GdpContainerProps) => {
  const { modalOpen } = props;
  const [gdpData, setGdpData] = useState<any>();
  const [fetchGDPResponse, fetchGDPLoading, fetchGDP] = useFetchApi<GDPResponseT>(`/fred/gdp-tile-data`);

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
          fill: "start",
          backgroundColor: "rgb(0, 0, 0)",
          borderColor: "rgb(0, 0, 0)",
          pointRadius: 1,
          tension: 0.1,
        },
      ],
    };

    const options: any = {
      scales: {
        x: {
          type: "time",
          time: {
            unit: "month",
          },
          display: modalOpen,
        },
        y: {
          type: "linear",
          display: modalOpen,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    };

    return <Line data={chartData} options={options} />;
  };

  return !gdpData ? (
    <div>Loading...</div>
  ) : (
    <StyledGdpContainer>
      <div>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>{gdpData.current}</div>
        <div>Billion, USD</div>
      </div>

      <div className={"content-container"}>
        <div className={"chart-container"}>
          <SimpleLineChart data={gdpData} />
        </div>

        <div className={"change-details"}>
          <div className={"change-row"}>
            {gdpData.month_3}% <div className={"change-label"}>3M</div>
          </div>
          <div className={"change-row"}>
            {gdpData.year_1}%<div className={"change-label"}>1Y</div>
          </div>
          <div className={"change-row"}>
            {gdpData.year_5}%<div className={"change-label"}>5Y</div>
          </div>
          <div className={"change-row"}>
            {gdpData.average_percent}%<div className={"change-label"}>AVG</div>
          </div>
        </div>
      </div>
      <Loading show={fetchGDPLoading} />
    </StyledGdpContainer>
  );
};

export default GdpContainer;

const StyledGdpContainer = styled.div`
  .chart-container {
    background-color: #008689;
    border-radius: 10px;
    width: 70%;
  }

  .content-container {
    display: flex;
    margin-top: 20px;
  }

  .change-row {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .change-label {
    font-size: 13px;
    color: #696969;
  }

  .change-details {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    flex-direction: column;
  }
`;
