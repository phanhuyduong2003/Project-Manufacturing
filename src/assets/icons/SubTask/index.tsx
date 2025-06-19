import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const SubTask = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M7 4.5a2.5 2.5 0 0 1-2 2.45v1.8A2.25 2.25 0 0 0 7.25 11h1.8a2.5 2.5 0 1 1 .158 1.5H7.25A3.75 3.75 0 0 1 3.5 8.75V6.792A2.5 2.5 0 1 1 7 4.5Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="currentColor"
      />
    </Icon>
  );
};
