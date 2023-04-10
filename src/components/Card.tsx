import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title: string;
  amount: number;
}
export const Card: React.FunctionComponent<CardProps> = ({
  children,
  title,
  amount,
}) => {
  return (
    <div className="flex rounded-md bg-[#3b78de] text-white p-4 gap-x-4">
      <div className="flex flex-col justify-center gap-y-4">
        <h3 className="text-xs font-normal ">{title}</h3>

        <p className="text-2xl font-semibold whitespace-nowrap"> $ {amount}</p>
      </div>

      <div className="h-full w-full relative">
        <div className="w-40">{children}</div>
      </div>
    </div>
  );
};
