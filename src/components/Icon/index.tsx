import { IconProps } from "@/types/common";
import classNames from "classnames";

const Icon = ({ size = 16, children, ...props }: IconProps) => {
  return (
    <span className={classNames("pm-icon", props.className)}>
      <svg
        width={size}
        height={size}
        fill="none"
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {children}
      </svg>
    </span>
  );
};

export default Icon;
