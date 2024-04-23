import styled from "styled-components";
import DownloadsItem from "pages/downloads/DownloadsItem";
import resume from "assets/files/Resume_Current.pdf";
import document from "assets/files/Document.pdf";
import transcript from "assets/files/Transcript.pdf";

const StyledComponents = styled.div`
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
            <DownloadsItem name={"CV"} description={"My most up to date CV"} link={resume} />
            <DownloadsItem
              name={"Transcript"}
              description={"My university transcript with my final grades and achievments"}
              link={transcript}
            />
            <DownloadsItem
              name={"Graduation Certificate"}
              description={"The Certificate I was awarded for completing my bacholar of science"}
              link={document}
            />
          </tbody>
        </table>
      </div>
    </StyledComponents>
  );
};
export default Downloads;
