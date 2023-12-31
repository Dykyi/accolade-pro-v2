import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

const Portal: FC<PortalProps> = ({ children, container = document.body }) => {
  return createPortal(children, container);
};

export default Portal;
