import React from "react";
import { Sidebar } from "../sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}
export const DashboardLayout: React.FunctionComponent<AppLayoutProps> = ({
  children,
}) => {
  return (
    <div className="overflow-auto bg-main-gray-bg-darkish  md:flex md:w-full">
      <Sidebar />

      <div
        // ref={mainRef}
        className="w-full md:h-screen md:min-h-full md:overflow-auto md:px-0">
        <div
        // ref={headerRef}
        >
          {/* <DashboardHeader /> */}
        </div>

        <main className="mb-10 flex-grow">{children}</main>
      </div>

      {/* <RightBar /> */}
    </div>
  );
};
