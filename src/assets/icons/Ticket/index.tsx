import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const Ticket = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M10.667 2.667a1 1 0 1 0 2 0H14a2 2 0 0 1 2 2v6.667a2 2 0 0 1-2 2h-1.333a1 1 0 0 0-2 0H2a2 2 0 0 1-2-2V4.667a2 2 0 0 1 2-2h8.667ZM2 3.667a1 1 0 0 0-1 1v6.667a1 1 0 0 0 1 1h7.935a2 2 0 0 1 3.464 0H14a1 1 0 0 0 1-1V4.667a1 1 0 0 0-1-1h-.6a2 2 0 0 1-3.465 0H2Zm2.167 5.667a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1 0-1h1.667ZM12 10h-.667V6H12v4ZM8.5 7.334a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1h6Zm0-2a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1h6Z"
        fill="currentColor"
      />
    </Icon>
  );
};
