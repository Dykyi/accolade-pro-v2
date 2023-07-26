import { memo } from "react";
import styles from "./Overlay.module.scss";

interface OverlayProps {
  onClick?: () => void;
}

export const Overlay = memo(({ onClick }: OverlayProps) => (
  <div className={styles.overlay} onClick={onClick} />
));

Overlay.displayName = "Overlay";

export default Overlay;
