import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";
import ProjectCodeDisplayMenuItem from "pages/projects//projects-code-display/ProjectCodeDisplayMenuItem";
import { useEffect, useState } from "react";

interface Types {
  files: any;
}

const StyledProjectCodeDisplay = styled.div`
  padding: 1rem;
  display: flex;
`;

const ProjectCodeDisplay = ({ files }: Types) => {
  const [code, setCode] = useState("");
  const [openItem, setOpenItem] = useState<{
    name: string;
    id: string;
    link: any;
    language: string;
  }>(files[0]);

  useEffect(() => {
    fetch(openItem.link)
      .then((x) => x.text())
      .then((text) => {
        setCode(text);
      });
  }, [openItem]);

  return (
    <StyledProjectCodeDisplay>
      <div className="file-selector">
        {files.map(
          (item: { name: string; id: string; link: string; language: string }, index: number) => (
            <ProjectCodeDisplayMenuItem
              key={index}
              item={item}
              open={openItem.id === item.id}
              setOpen={setOpenItem}
            />
          )
        )}
      </div>
      <SyntaxHighlighter language={openItem.language} style={docco}>
        {code}
      </SyntaxHighlighter>
    </StyledProjectCodeDisplay>
  );
};

export default ProjectCodeDisplay;
