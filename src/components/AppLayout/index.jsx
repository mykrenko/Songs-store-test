import { Outlet } from "react-router";
import Header from "../Header";
import ReactErrorBoundary from "../ReactErrorBoundary";

const AppLayout = () => {
  return (
    <>
      <Header />
      <ReactErrorBoundary>
        <Outlet />
      </ReactErrorBoundary>
    </>
  );
};

export default AppLayout;
