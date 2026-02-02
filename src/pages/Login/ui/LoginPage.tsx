import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation("login");

  return (
    <>
      <h1>{t("login")}</h1>
      <Link to={"/"}>Home page</Link>
    </>
  );
};

export default LoginPage;
