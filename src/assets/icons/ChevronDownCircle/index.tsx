import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const ChevronDownCircle = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M9.999.833a9.167 9.167 0 1 1 0 18.334 9.167 9.167 0 0 1 0-18.334Zm0 1.25a7.917 7.917 0 1 0 0 15.834 7.917 7.917 0 0 0 0-15.834Zm2.892 6.642a.625.625 0 0 1 .883.883l-3.333 3.334a.626.626 0 0 1-.884 0L6.224 9.608a.625.625 0 0 1 .883-.883L10 11.616l2.892-2.891Z"
        fill="currentColor"
      />
    </Icon>
  );
};
