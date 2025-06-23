import { Button, Empty, Typography } from "antd";
import { Link } from "react-router";

import images from "@/assets/images";
import paths from "@/config/paths";

export const EmptyProduct = () => {
  return (
    <Empty
      classNames={{
        root: "no-product",
        image: "no-product-image",
        footer: "no-product-footer",
      }}
      description={
        <Typography.Paragraph className="no-product-description">
          Bạn chưa có sản phẩm nào.
          <br />
          Nhấn “Thêm sản phẩm” để bắt đầu.
        </Typography.Paragraph>
      }
      image={images.empty}
    >
      <Link to={paths.productCreate}>
        <Button className="btn-primary" size="large" type="primary">
          Thêm sản phẩm
        </Button>
      </Link>
    </Empty>
  );
};
