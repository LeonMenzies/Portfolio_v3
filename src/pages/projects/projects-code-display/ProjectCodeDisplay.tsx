import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";
import ProjectCodeDisplayMenuItem from "pages/projects//projects-code-display/ProjectCodeDisplayMenuItem";
import { useEffect, useState } from "react";

interface Types {
  files: any;
}

const StyledProjectCodeDisplay = styled.div`
  display: flex;

  .file-selector {
    position: relative;
    width: 20%;
    margin-top: 13px;
  }

  .code-view {
    position: relative;
    width: 80%;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    .file-selector {
      width: 100%;
    }
    .code-view {
      width: 100%;
    }
  }
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
      <div className={"code-view"}>
        <SyntaxHighlighter
          language={openItem.language}
          style={docco}
          customStyle={{ overflowY: "auto" }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </StyledProjectCodeDisplay>
  );
};

export default ProjectCodeDisplay;
