import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const Info = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M7.333.667a7.334 7.334 0 1 1 0 14.667 7.334 7.334 0 0 1 0-14.667Zm0 1a6.333 6.333 0 1 0 0 12.666 6.333 6.333 0 0 0 0-12.667Zm0 4.333a.5.5 0 0 1 .5.5v3.834h.834a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1h.833V7h-.5a.5.5 0 0 1 0-1h1Zm0-2a.667.667 0 1 1 0 1.334.667.667 0 0 1 0-1.334Z"
        fill="currentColor"
      />
    </Icon>
  );
};
