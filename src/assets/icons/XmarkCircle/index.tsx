import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const XmarkCircle = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M8.001.667a7.334 7.334 0 1 1 0 14.668 7.334 7.334 0 0 1 0-14.668Zm3.139 4.195a.667.667 0 0 0-.944 0L8.001 7.058 5.806 4.862a.666.666 0 1 0-.943.943L7.06 8l-2.196 2.195a.667.667 0 0 0 .943.944L8 8.943l2.195 2.196a.667.667 0 0 0 .944-.944L8.944 8l2.196-2.195a.667.667 0 0 0 0-.943Z"
        fill="currentColor"
      />
    </Icon>
  );
};
