import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const ArrowLeft = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M7.744 4.41a.834.834 0 0 1 1.179 1.18L5.345 9.165h11.322a.833.833 0 0 1 0 1.667H5.345l3.578 3.578a.834.834 0 0 1-1.179 1.178l-5-5a.834.834 0 0 1 0-1.178l5-5Z"
        fill="currentColor"
      />
    </Icon>
  );
};
