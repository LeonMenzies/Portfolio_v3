import styled from "styled-components";

export const DashboardContainer = () => {
  return (
    <StyledDashboardContainer>
      <div>dashboard</div>
    </StyledDashboardContainer>
  );
};
export default DashboardContainer;

const StyledDashboardContainer = styled.div`
  .downloads-table {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    table {
      margin: 2rem;
      padding: 2rem;
      background: ${({ theme }) => theme.clear};
      color: ${({ theme }) => theme.textPrimary};
    }

    td,
    th {
      text-align: left;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: ${({ theme }) => theme.clearSeconday};
    }
  }
`;
