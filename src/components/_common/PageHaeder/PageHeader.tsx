import { ReactNode } from "react";
import styles from "./PageHeader.module.scss";

interface PageHeaderProps {
  title: string;
  renderSelect?: ReactNode;
}

const PageHeader = ({ title, renderSelect }: PageHeaderProps) => (
  <div className={styles.pageHeader}>
    <h1 className={styles.pageTitle}>{title}</h1>
    {renderSelect && renderSelect}
  </div>
);

export default PageHeader;
