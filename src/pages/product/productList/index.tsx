import { Button, Flex, Skeleton } from "antd";
import { useEffect } from "react";
import { Link } from "react-router";

import { Plus } from "@/assets/icons";
import { EmptyCommon } from "@/components/Empty";
import paths from "@/config/paths";
import { TableProduct } from "@/pages/product/components";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getProducts } from "@/redux/slices/productSlice";

export const Product = () => {
  const dispatch = useAppDispatch();
  const productState = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="wrapper product">
      <div className="content">
        <Flex gap={35} vertical>
          {productState.loading ? (
            <Skeleton active />
          ) : productState.products?.length > 0 ? (
            <>
              <Flex align="center" className="product-header list-common-header" justify="space-between">
                <h1 className="product-header-title list-common-header-title">Danh sách sản phẩm</h1>
                <Link to={paths.productCreate}>
                  <Button className="btn-primary" icon={<Plus />} iconPosition="end" type="primary">
                    Thêm sản phẩm
                  </Button>
                </Link>
              </Flex>
              <TableProduct data={productState.products} />
            </>
          ) : (
            <EmptyCommon
              buttonText="Thêm sản phẩm"
              description={
                <>
                  Bạn chưa có sản phẩm nào.
                  <br />
                  Nhấn “Thêm sản phẩm” để bắt đầu.
                </>
              }
              href={paths.productCreate}
            />
          )}
        </Flex>
      </div>
    </div>
  );
};
