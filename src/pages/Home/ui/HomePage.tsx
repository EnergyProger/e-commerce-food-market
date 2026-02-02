import { Link } from "react-router";

const HomePage = () => {
  return (
    <>
      Home
      <Link to={"/login"}>Login page</Link>
    </>
  );
};

export default HomePage;
