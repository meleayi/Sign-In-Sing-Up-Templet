import React from "react";

const HeaderBox = ({
  type,
  title,
  user,
  subtitle,
}: {
  type: string;
  title: string;
  user: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-[24px] lg:text-[30px] font-semibold text-gray-900">
        {title}
        {type === "greeting" && <span className="text-[#0179FE]">{user}</span>}
      </h1>
      <p className="headerbox-subtitle">{subtitle}</p>
    </div>
  );
};

export default HeaderBox;
