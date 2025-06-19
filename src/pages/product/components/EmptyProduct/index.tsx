import { Button, Empty, Typography } from "antd";

import images from "@/assets/images";

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
      <Button className="btn-primary" size="large" type="primary">
        Thêm sản phẩm
      </Button>
    </Empty>
  );
};
