import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Sidebar = () => {
  const sideBarLinks = [
    {
      link: "/",
      name: "Dashboard",
      icon: "",
      isChildren: "",
    },
    {
      link: "/products",
      name: "Products",
      icon: "",
      isChildren: "",
    },
    {
      link: "/blog",
      name: "Blog",
      icon: "",
      isChildren: "",
      children: [],
    },
    {
      link: "/transactions",
      name: "Transactions",
      icon: "",
      isChildren: "",
    },
    {
      link: "/users",
      name: "Users",
      icon: "",
      isChildren: "",
    },
    {
      link: "/analysis",
      name: "Analysis",
      icon: "",
      isChildren: "",
    },
    {
      link: "/reports",
      name: "Reports",
      icon: "",
      isChildren: "",
    },
    {
      link: "/investments",
      name: "Investments",
      icon: "",
      isChildren: "",
    },
    {
      link: "/settings",
      name: "Settings",
      icon: "",
      isChildren: "",
    },
  ];

  const router = useRouter();

  const isLinkSelected = (link: string) => {
    return router.pathname === link;
  };

  return (
    <div className="leftbar-shadow hidden h-screen w-full max-w-[210px] shrink-0 overflow-y-auto bg-main-gray-bg-dark py-16 md:flex md:flex-col md:gap-16 2xl:max-w-[280px]">
      <h2 className="font-extrabold text-stretch mx-6 text-[2rem] text-[#1e3c65]">
        RETRO
      </h2>
      <div className="md:gap-2 flex flex-col">
        {sideBarLinks.map((links) => {
          return (
            <Link
              href={links.link}
              key={links.name}
              className={clsx(
                "px-6 py-2 flex items-center justify-start rounded-md text-[1rem]",
                isLinkSelected(links.link) && "bg-[#edeffa]"
              )}>
              <div>{links.icon}</div>
              <span className={clsx("inline-block")}>{links.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
