import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const Calendar = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M13.333 1.667V5M6.667 1.667V5M2.5 8.333h15m-13.333-5h11.666c.92 0 1.667.746 1.667 1.667v11.666c0 .921-.746 1.667-1.667 1.667H4.167c-.92 0-1.667-.746-1.667-1.666V5c0-.92.746-1.667 1.667-1.667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Icon>
  );
};
