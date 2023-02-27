import styled from "styled-components";
import { AiOutlineDownload } from "react-icons/ai";
import IconButton from "components/IconButton";

const StyledDownloadsItem = styled.tr`
  .centred-cell {
    display: flex;
    justify-content: center;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.secondary};
    }
  }
`;

interface Types {
  name: string;
  description: string;
  link: string;
}

const DownloadsItem = ({ name, description, link }: Types) => {
  return (
    <StyledDownloadsItem>
      <td>{name}</td>
      <td>{description}</td>
      <td className={"centred-cell"}>
        <a href={link} download>
          <IconButton
            icon={<AiOutlineDownload />}
            onClick={undefined}
            outline={true}
            fontSize={"1rem"}
          />
        </a>
      </td>
    </StyledDownloadsItem>
  );
};

export default DownloadsItem;
