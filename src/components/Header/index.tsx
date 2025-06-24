import { Flex } from "antd";
import classNames from "classnames";
import { useNavigate } from "react-router";

import { ArrowLeft } from "@/assets/icons";
import { HeaderProps } from "@/types/common";

export const Header = ({ title, className }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <Flex align="center" className={classNames("header", className?.wrapper)} gap={16}>
      <button className={classNames("header-back", className?.icon)} onClick={() => navigate(-1)}>
        <ArrowLeft size={20} viewBox="0 0 20 20" />
      </button>
      <h1 className={classNames("header-title", className?.title)}>{title}</h1>
    </Flex>
  );
};
