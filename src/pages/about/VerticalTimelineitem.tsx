import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretDown } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { themeAtom } from "recoil/theme";

interface Types {
  item: any;
}
const VerticalTimelineitem = ({ item }: Types) => {
  const [open, setOpen] = useState(false);
  const theme = useRecoilValue(themeAtom);

  return (
    <VerticalTimelineElement
      className="vertical-timeline-item"
      contentStyle={{ background: theme.clear }}
      contentArrowStyle={{ borderRight: theme.clear }}
      date={item.date}
      iconStyle={{ background: theme.clear, color: theme.secondary }}
      icon={<MdWork />}
      style={{ color: theme.textPrimary }}
    >
      <div className="title">{item.title}</div>
      <div className="location">{item.location}</div>
      <ul>
        {item.details.map((val: any, index: number) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
      <div onClick={() => setOpen(!open)} className="show-more-title">
        Show More {open ? <AiFillCaretLeft /> : <AiFillCaretDown />}
      </div>
      {open && (
        <div className="more-info">
          <div>{item.moreInfo}</div>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineitem;
