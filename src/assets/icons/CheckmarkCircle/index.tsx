import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const CheckmarkCircle = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M8.001.667a7.334 7.334 0 1 1 0 14.668 7.334 7.334 0 0 1 0-14.668Zm3.127 4.85a.667.667 0 0 0-.943.024l-3.3 3.465L5.84 7.789a.667.667 0 0 0-1.013.867l1.525 1.779a.667.667 0 0 0 .988.025l3.81-4a.667.667 0 0 0-.023-.942Z"
        fill="currentColor"
      />
    </Icon>
  );
};
