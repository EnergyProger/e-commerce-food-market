import { useTranslation } from "react-i18next";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}></main>
      <Footer />
    </div>
  );
};

export default HomePage;
