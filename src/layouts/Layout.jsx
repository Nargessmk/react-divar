import Footer from "./Footer";
import Header from "./Header";

import styles from "./layout.module.css"

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
