import styled from "styled-components";
import { AiFillLock } from "react-icons/ai";
import { useEffect, useState } from "react";

const StyledDownloadsItem = styled.tr`
  .centred-cell {
    display: flex;
    justify-content: center;
  }
`;

interface Types {
  name: string;
  description: string;
  link: string;
}

const DownloadsItem = ({ name, description, link }: Types) => {
  const [locked, setLocked] = useState(true);
  const [code, setCode] = useState("");

  useEffect(() => {
    if (code === "pass") {
      console.log("Downloading");
    }
  }, [code]);

  return (
    <StyledDownloadsItem>
      <td>{name}</td>
      <td>{description}</td>
      <td className={"centred-cell"}>
        {locked ? (
          <AiFillLock onClick={() => setLocked(false)} />
        ) : (
          <input onChange={(e: any) => setCode(e.target.value)} />
        )}
      </td>
    </StyledDownloadsItem>
  );
};

export default DownloadsItem;
