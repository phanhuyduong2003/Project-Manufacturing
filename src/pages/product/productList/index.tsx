import { Button, Flex } from "antd";
import { Link } from "react-router";

import { Plus } from "@/assets/icons";
import paths from "@/config/paths";
import { EmptyProduct, TableProduct } from "@/pages/product/components";

export const Product = () => {
  return (
    <div className="wrapper product">
      <Flex gap={35} vertical>
        <Flex align="center" className="product-header" justify="space-between">
          <h1 className="product-header-title">Danh sách sản phẩm</h1>
          <Link to={paths.productCreate}>
            <Button className="btn-primary" icon={<Plus />} iconPosition="end" type="primary">
              Thêm sản phẩm
            </Button>
          </Link>
        </Flex>
        <TableProduct />
        <EmptyProduct />
      </Flex>
    </div>
  );
};
