import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useRecoilValue } from "recoil";
import { themeAtom } from "recoil/theme";

interface Types {
  id: string;
  text: string;
  disabled?: boolean;
}

const Tooltip = ({ id, text, disabled }: Types) => {
  const theme = useRecoilValue(themeAtom);
  return disabled ? (
    <></>
  ) : (
    <ReactTooltip
      anchorId={id}
      place="bottom"
      content={text}
      style={{ backgroundColor: theme.primary, color: theme.textPrimary }}
    />
  );
};

export default Tooltip;
