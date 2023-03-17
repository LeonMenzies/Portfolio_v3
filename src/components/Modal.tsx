import IconButton from "components/IconButton";
import ReactModal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { themeAtom } from "recoil/theme";
import { useRecoilValue } from "recoil";

const Modal = ({ open, onClose, children }: any) => {
  const theme = useRecoilValue(themeAtom);

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={onClose}
      style={{
        overlay: {
          zIndex: "2",
        },
        content: {
          backgroundColor: theme.primary,
        },
      }}
      contentLabel="Example Modal"
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton icon={<AiOutlineClose />} onClick={onClose} outline={true} fontSize={"0.5"} />
      </div>
      {children}
    </ReactModal>
  );
};

export default Modal;
