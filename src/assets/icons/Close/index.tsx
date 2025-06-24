import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const Close = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M12.312 2.98a.5.5 0 0 1 .707.707L8.704 7.999l4.313 4.314a.5.5 0 1 1-.707.707L7.999 8.707 3.686 13.02a.5.5 0 0 1-.708-.707l4.313-4.314-4.313-4.312a.5.5 0 1 1 .708-.707l4.312 4.312 4.314-4.312Z"
        fill="currentColor"
      />
    </Icon>
  );
};
