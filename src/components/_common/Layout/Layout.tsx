import { ReactNode } from "react";
import Header from "../Header";
import Container from "../Container";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className={styles.main}>
      <Container>{children}</Container>
    </main>
  </>
);

export default Layout;
