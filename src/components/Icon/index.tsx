import classNames from "classnames";

import { IconProps } from "@/types/common";

const Icon = ({ size = 16, viewBox = "0 0 16 16", children, ...props }: IconProps) => {
  return (
    <span className={classNames("pm-icon", props.className)}>
      <svg fill="none" height={size} viewBox={viewBox} width={size} xmlns="http://www.w3.org/2000/svg" {...props}>
        {children}
      </svg>
    </span>
  );
};

export default Icon;
