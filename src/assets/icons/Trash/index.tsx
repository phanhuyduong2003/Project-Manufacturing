import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const Trash = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M8.665.667a2 2 0 0 1 2 2v.667h3.5a.5.5 0 1 1 0 1h-.833v7a4 4 0 0 1-4 4H6.665a4 4 0 0 1-4-4v-7h-.833a.5.5 0 0 1 0-1h3.5v-.667a2 2 0 0 1 2-2h1.333Zm-5 10.667a3 3 0 0 0 3 3h2.667a3 3 0 0 0 3-3v-7H3.665v7Zm3-4.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5Zm2.667 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5Zm-2-5.167a1 1 0 0 0-1 1v.667h3.333v-.667a1 1 0 0 0-1-1H7.332Z"
        fill="currentColor"
      />
    </Icon>
  );
};
