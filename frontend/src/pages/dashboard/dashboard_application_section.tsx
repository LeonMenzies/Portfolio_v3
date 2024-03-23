import Button from "components/input/button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useFetchApi from "hooks/useFetchApi";
import { useEffect, useState } from "react";
import { ApplicationsResponseT } from "types/ApiTypes";
import Loading from "components/display/loading";

/* eslint-disable-next-line */
export interface DashboardApplicationSectionProps {}

export function DashboardApplicationSection(props: DashboardApplicationSectionProps) {
  const navigate = useNavigate();
  const [fetchApplicationsResponse, fetchApplicationsLoading, fetchApplications] = useFetchApi<ApplicationsResponseT[]>("/applications");
  const [applications, setApplications] = useState<ApplicationsResponseT[]>([]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  useEffect(() => {
    if (fetchApplicationsResponse.success && fetchApplicationsResponse.data) {
      setApplications(fetchApplicationsResponse.data);
    }
  }, [fetchApplicationsResponse]);

  return (
    <StyledDashboardApplicationSection>
      <Button text={"Add"} onClick={() => navigate("/application")} />

      <table className={"applications-table"}>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Company Email</th>
            <th>Job Title</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {applications.map((application: ApplicationsResponseT) => (
            <tr key={application.id}>
              <td>{application.companyName}</td>
              <td>{application.email}</td>
              <td>{application.jobTitle}</td>
              <td>{application.status}</td>
              <td>
                <Button text={"Edit"} onClick={() => navigate(`/application/${application.id}`)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Loading show={fetchApplicationsLoading} />
    </StyledDashboardApplicationSection>
  );
}

export default DashboardApplicationSection;

const StyledDashboardApplicationSection = styled.div`
  .applications-table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      background-color: #f2f2f2;
      text-align: left;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  }
`;
