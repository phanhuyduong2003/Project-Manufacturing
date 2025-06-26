import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const ChevronRight = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M5.646 3.646a.5.5 0 0 1 .707 0l4 4a.5.5 0 0 1 0 .707l-4 4a.5.5 0 0 1-.707-.707L9.293 8 5.646 4.353a.5.5 0 0 1 0-.707Z"
        fill="currentColor"
      />
    </Icon>
  );
};
