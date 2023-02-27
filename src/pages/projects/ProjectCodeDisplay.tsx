import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Types {
  code: string;
}

const ProjectCodeDisplay = ({ code }: Types) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {code}
    </SyntaxHighlighter>
  );
};

export default ProjectCodeDisplay;
