import { FC, ReactNode } from "react";
import Portal from "../Portal";
import Overlay from "../Overlay";
import styles from "./Modal.module.scss";
import { ReactComponent as CloseIcon } from "../../../assets/icons/svg/close.svg";

interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
  handleClose?: () => void;
}

const Modal: FC<ModalProps> = ({ children, isOpen, handleClose }) => {
  const wrapperStyles = isOpen
    ? `${styles.wrapperModal} ${styles.openModal}`
    : styles.wrapperModal;

  return (
    <Portal>
      <div className={wrapperStyles}>
        <div className={styles.content}>
          <CloseIcon className={styles.closeIcon} onClick={handleClose} />
          {children}
        </div>
        <Overlay onClick={handleClose} />
      </div>
    </Portal>
  );
};

export default Modal;
