import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const Plus = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M8 .5c.46 0 .833.373.833.833v5.834h5.834a.833.833 0 0 1 0 1.666H8.833v5.834a.833.833 0 0 1-1.666 0V8.833H1.333a.833.833 0 0 1 0-1.666h5.834V1.333C7.167.873 7.54.5 8 .5Z"
        fill="currentColor"
      />
    </Icon>
  );
};
