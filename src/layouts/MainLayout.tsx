import { Outlet } from "react-router";
import Header from "../components/header/Header";
import { Constraint } from "../components/shared/styledCommon";

const MainLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Constraint>
          <Outlet />
        </Constraint>
      </main>
    </>
  );
};

export default MainLayout;
