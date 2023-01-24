import styled from "styled-components";
import DownloadsItem from "pages/downloads/DownloadsItem";

const StyledComponents = styled.div`
  .downloads-table {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    table {
      margin: 2rem;
      padding: 2rem;
      border-radius: 10px;
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

const Downloads = () => {
  return (
    <StyledComponents>
      <div className={"downloads-table"}>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Download</th>
            </tr>
            <DownloadsItem
              name={"CV"}
              description={"My most up to date CV"}
              link={"assets/Resume_current.pdf"}
            />
            <DownloadsItem
              name={"Transcript"}
              description={"My university transcript with my final grades and achievments"}
              link={"assets/Transcript.pdf"}
            />
          </tbody>
        </table>
      </div>
    </StyledComponents>
  );
};
export default Downloads;
