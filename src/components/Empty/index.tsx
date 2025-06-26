import { Button, Empty, Typography } from "antd";
import { Link } from "react-router";

import images from "@/assets/images";
import { EmptyProps } from "@/types/common";

export const EmptyCommon = ({ ...props }: EmptyProps) => {
  return (
    <Empty
      classNames={{
        root: "empty",
        image: "empty-image",
        footer: "empty-footer",
      }}
      description={<Typography.Paragraph className="empty-description">{props.description}</Typography.Paragraph>}
      image={images.empty}
    >
      <Link to={props.href}>
        <Button className="btn-primary" size="large" type="primary">
          {props.buttonText}
        </Button>
      </Link>
    </Empty>
  );
};
