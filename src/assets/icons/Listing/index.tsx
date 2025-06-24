import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const Listing = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M4.667 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 1 1 0 1h-9a.5.5 0 0 1-.5-.5Zm.5 4a.5.5 0 1 0 0 1h9a.5.5 0 1 0 0-1h-9Zm0 4.5a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1h-9ZM2.75 3.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 4.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 4.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        fill="currentColor"
      />
    </Icon>
  );
};
