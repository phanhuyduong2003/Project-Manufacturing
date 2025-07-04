import { Button, Flex, Form, Skeleton, Tabs, TabsProps } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { generatePath, Link, useNavigate } from "react-router";

import { Header } from "@/components/Header";
import paths from "@/config/paths";
import { useShowMessage } from "@/hooks/useShowMessage";
import { FormulaTab } from "@/pages/product/components/FormulaTab";
import { ProductTab } from "@/pages/product/components/ProductTab";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCategories } from "@/redux/slices/declareSlice";
import { createProduct, getProductById } from "@/redux/slices/productSlice";
import { ValuesFormProduct } from "@/types/common";

export const FormProduct = ({ isEdit = false }: { isEdit?: boolean }) => {
  const [form] = Form.useForm();
  const message = useShowMessage();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const productState = useAppSelector((state) => state.product);
  const declareState = useAppSelector((state) => state.declare);
  const [activeTab, setActiveTab] = useState<string>("product-detail");
  const [disabledFormula, setDisabledFormula] = useState(false);
  const productID = Number(window.location.pathname.split("/").pop());

  useEffect(() => {
    if (isEdit && productID) {
      dispatch(getProductById(productID));
    }
    dispatch(getCategories());
  }, [dispatch, isEdit, productID]);
  useEffect(() => {
    if (isEdit && productState.productDetail) {
      form.setFieldsValue({
        status: productState.productDetail.status,
        code: productState.productDetail.name,
        name: productState.productDetail.name,
        typeId: productState.productDetail.typeId,
        createdAt: dayjs(productState.productDetail.createdAt).format("DD/MM/YYYY"),
        quantity: declareState.categories.find((item) => item.id === productState.productDetail?.typeId)?.products
          .length,
      });
    }
  }, [form, isEdit, productState.productDetail, declareState.categories]);
  useEffect(() => {
    if (!isEdit) {
      form.setFieldsValue({
        createdAt: dayjs().format("DD/MM/YYYY"),
        createdBy: "Phan Huy Dương",
      });
    }
  });

  const handleCreateProduct = async (values: ValuesFormProduct) => {
    const data = {
      status: values.status,
      name: values.code,
      typeId: values.typeId,
      createdAt: dayjs().toISOString(),
      createdById: 9,
    };
    const response = await dispatch(createProduct(data));
    if (createProduct.fulfilled.match(response)) {
      message.success("Tạo sản phẩm thành công");
      form.resetFields();
      setDisabledFormula(false);
      setTimeout(() => {
        navigate(generatePath(paths.productDetail, { id: response.payload.id }));
      }, 1000);
    }
    if (createProduct.rejected.match(response)) {
      message.error("Tạo sản phẩm thất bại");
    }
  };

  const productTabItems: TabsProps["items"] = [
    {
      key: "product-detail",
      label: "Chi tiết mã sản phẩm",
      children: (
        <>
          {productState?.loadingDetail ? (
            <Skeleton active />
          ) : (
            <Form
              form={form}
              layout="vertical"
              name="form-product"
              onFinish={handleCreateProduct}
              onValuesChange={() => setDisabledFormula(true)}
            >
              <ProductTab declareState={declareState} form={form} />
            </Form>
          )}
          <div className="product-form-footer">
            <Flex gap={12} justify="end">
              <Link to={paths.product}>
                <Button className="btn-secondary" color="default" size="large" variant="filled">
                  Hủy
                </Button>
              </Link>
              <Button
                className="btn-primary"
                form="form-product"
                htmlType="submit"
                loading={productState.loading}
                size="large"
                type="primary"
              >
                Lưu
              </Button>
            </Flex>
          </div>
        </>
      ),
    },
    {
      key: "formula",
      label: "Công thức",
      children: <FormulaTab disabledFormula={disabledFormula} setActiveTab={setActiveTab} />,
    },
  ];

  return (
    <div className="wrapper product-form">
      <div className="content">
        <Header title={isEdit ? "Chi tiết sản phẩm" : "Tạo sản phẩm"} />
        <Tabs activeKey={activeTab} className="product-form-tab" items={productTabItems} onTabClick={setActiveTab} />
      </div>
    </div>
  );
};
