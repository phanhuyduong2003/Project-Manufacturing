import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const CheckCircle = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M18.335 9.234V10a8.333 8.333 0 1 1-4.942-7.616m4.942.95L10 11.675l-2.5-2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Icon>
  );
};
