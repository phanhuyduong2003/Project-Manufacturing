import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const PlusCircle = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M8.001.666a7.334 7.334 0 1 1 0 14.668 7.334 7.334 0 0 1 0-14.668Zm0 3.333a.667.667 0 0 0-.666.667v2.667H4.668a.667.667 0 1 0 0 1.333h2.667v2.667a.666.666 0 0 0 1.333 0V8.666h2.667a.667.667 0 0 0 0-1.333H8.668V4.666a.667.667 0 0 0-.667-.667Z"
        fill="currentColor"
      />
    </Icon>
  );
};
