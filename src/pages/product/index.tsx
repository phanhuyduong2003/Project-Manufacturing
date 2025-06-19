import { Button, Flex } from "antd";

import { Plus } from "@/assets/icons";
import { EmptyProduct, TableProduct } from "@/pages/product/components";

export const Product = () => {
  return (
    <div className="wrapper product">
      <Flex gap={35} vertical>
        <Flex align="center" className="product-header" justify="space-between">
          <h1 className="product-header-title">Danh sách sản phẩm</h1>
          <Button className="btn-primary" icon={<Plus />} iconPosition="end" type="primary">
            Thêm sản phẩm
          </Button>
        </Flex>
        <TableProduct />
        <EmptyProduct />
      </Flex>
    </div>
  );
};
