import { FC, HTMLAttributes, PropsWithChildren } from "react";
import styles from "./LiftCardsLayout.module.scss";

const LiftCardsLayout: FC<
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
> = ({ children, className, ...props }) => {
  const layoutStyles = className
    ? `${styles.layout} ${className}`
    : styles.layout;

  return (
    <div className={layoutStyles} {...props}>
      {children}
    </div>
  );
};
export default LiftCardsLayout;
