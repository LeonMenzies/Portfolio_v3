import useFetchApi from "hooks/useFetchApi";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { ApplicationsResponseT } from "types/ApiTypes";
import { useParams } from "react-router-dom";
import Loading from "components/display/loading";

/* eslint-disable-next-line */
export interface ApplicationContainerProps {}

export function ApplicationContainer(props: ApplicationContainerProps) {
  const { id } = useParams<{ id: string }>();

  const [fetchApplicationResponse, fetchApplicationLoading, fetchApplication] = useFetchApi<ApplicationsResponseT>(`/applications/${id}`);

  const [application, setApplication] = useState<ApplicationsResponseT>();

  useEffect(() => {
    if (id) {
      fetchApplication();
    }
  }, [fetchApplication, id]);

  useEffect(() => {
    if (fetchApplicationResponse.success && fetchApplicationResponse.data) {
      setApplication(fetchApplicationResponse.data);
    }
  }, [fetchApplicationResponse]);

  return (
    <StyledApplicationContainer>
      Application <Loading show={fetchApplicationLoading} />
    </StyledApplicationContainer>
  );
}

export default ApplicationContainer;

const StyledApplicationContainer = styled.div`
  color: pink;
`;
