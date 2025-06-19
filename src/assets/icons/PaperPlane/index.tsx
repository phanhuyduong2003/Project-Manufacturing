import Icon from "@/components/Icon";
import { IconProps } from "@/types/common";

export const PaperPlane = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d="M.705 1.684A1.334 1.334 0 0 1 2.611.822l12.181 6.29a1 1 0 0 1 0 1.777l-12.18 6.287a1.334 1.334 0 0 1-1.907-.863c-.051-.209-.004-.426.065-.63l1.503-4.506c2.979-.295 9.057-.925 9.06-1.177 0-.252-6.08-.883-9.06-1.178L.77 2.315c-.068-.204-.115-.422-.064-.63Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default PaperPlane;
