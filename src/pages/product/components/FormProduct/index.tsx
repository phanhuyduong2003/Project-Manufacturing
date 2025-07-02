import { Button, Flex, Form, Input, Radio, Select, Skeleton, Table, TableProps, Tabs, TabsProps, Tag } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { generatePath, Link, useNavigate } from "react-router";

import { Pencil, Search } from "@/assets/icons";
import { Header } from "@/components/Header";
import paths from "@/config/paths";
import { useShowMessage } from "@/hooks/useShowMessage";
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
    console.log(values);
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
      setTimeout(() => {
        navigate(generatePath(paths.productDetail, { id: response.payload.id }));
      }, 1000);
    }
    if (createProduct.rejected.match(response)) {
      message.error("Tạo sản phẩm thất bại");
    }
  };

  const statusTags = {
    approved: {
      label: "Đã duyệt",
      color: "#f7edff",
      textColor: "#391085",
    },
    pending: {
      label: "Chờ duyệt",
      color: "#ffeecf",
      textColor: "#d46b08",
    },
    rejected: {
      label: "Đã huỷ",
      color: "#ffdad6",
      textColor: "#a8071a",
    },
    draft: {
      label: "Chờ đẩy",
      color: "#ddf3ff",
      textColor: "#0050b3",
    },
  };
  const formulaTypes = [
    { value: 0, label: "Công thức chuẩn", color: "#9e1068" },
    { value: 1, label: "Công thức đạt", color: "#3ab67b" },
    { value: 2, label: "Chưa xác định", color: "#73787e" },
  ];

  const formulaColumns: TableProps["columns"] = [
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (text: keyof typeof statusTags) => (
        <Tag color={statusTags[text].color} style={{ color: statusTags[text].textColor }}>
          {statusTags[text].label}
        </Tag>
      ),
    },
    {
      title: "Chi tiết công thức",
      dataIndex: "formulaDetail",
      key: "formulaDetail",
      render: (_, record) => (
        <Flex gap={3} vertical>
          <div>
            Loại công thức:{" "}
            <span style={{ color: formulaTypes[record.formulaType].color }}>
              [{formulaTypes[record.formulaType].label}]
            </span>
          </div>
          <div>
            Tên mẫu thử: <span>{record.sampleName}</span>
          </div>
        </Flex>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      //   render: (text) => dayjs(text).format("HH:mm DD/MM/YYYY"),
    },
    {
      title: "Người phê duyệt",
      dataIndex: "approvedBy",
      key: "approvedBy",
    },
    {
      title: "Các hành động khác",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) =>
        record?.disabledEdit ? (
          <span>
            <Pencil cursor="not-allowed" opacity={0.5} />
          </span>
        ) : (
          <Link to="/#">
            <Pencil />
          </Link>
        ),
      align: "center",
    },
  ];
  const formulaData = [
    {
      key: "1",
      status: "approved",
      formulaType: 0,
      sampleName: "Mẫu thử tiêu chuẩn",
      createdAt: "18:32 23/03/2025",
      approvedBy: "Nguyễn Hoàng Huy",
      disabled: true,
    },
    {
      key: "2",
      status: "approved",
      formulaType: 1,
      sampleName: "Mẫu thử CT-01",
      createdAt: "18:32 23/03/2025",
      approvedBy: "Đinh Thị Nhàn",
      disabled: true,
      disabledEdit: true,
    },
    {
      key: "3",
      status: "pending",
      formulaType: 2,
      sampleName: "Mẫu thử CT-01",
      createdAt: "18:32 23/03/2025",
      approvedBy: "Nguyễn Quang Linh",
      disabledEdit: true,
    },
    {
      key: "4",
      status: "rejected",
      formulaType: 2,
      sampleName: "Mẫu thử CT-01",
      createdAt: "18:32 23/03/2025",
      approvedBy: "Nguyễn Hoàng Huy",
      disabledEdit: true,
    },
    {
      key: "5",
      status: "draft",
      formulaType: 2,
      sampleName: "Mẫu thử CT-01",
      createdAt: "18:32 23/03/2025",
      approvedBy: "",
    },
  ];

  const productTabItems: TabsProps["items"] = [
    {
      key: "product-detail",
      label: "Chi tiết mã sản phẩm",
      children: (
        <>
          {productState?.loadingDetail ? (
            <Skeleton active />
          ) : (
            <Form form={form} layout="vertical" name="form-product" onFinish={handleCreateProduct}>
              <Form.Item label="Trạng thái sản phẩm" name="status" rules={[{ required: true }]}>
                <Radio.Group
                  options={[
                    { value: 1, label: "Áp dụng" },
                    { value: 2, label: "Không áp dụng" },
                  ]}
                />
              </Form.Item>
              <Flex gap={10}>
                <Form.Item label="Mã sản phẩm" name="code" rules={[{ required: true }]} style={{ flex: 1 }}>
                  <Input size="large" />
                </Form.Item>
                <Form.Item label="Ngày tạo" name="createdAt">
                  <Input disabled size="large" />
                </Form.Item>
                <Form.Item label="Người tạo" name="createdBy">
                  <Input disabled size="large" />
                </Form.Item>
              </Flex>
              <Form.Item label="Tên sản phẩm" name="name">
                <Input placeholder="Nhập tên, mô tả sản phẩm" size="large" />
              </Form.Item>
              <Flex gap={10}>
                <Form.Item label="Loại sản phẩm" name="typeId" style={{ flex: 0.5 }}>
                  <Select
                    onSelect={(value) =>
                      form.setFieldValue(
                        "quantity",
                        declareState.categories.find((item) => item.id === value)?.products.length || 0,
                      )
                    }
                    options={declareState.categories.map((item) => ({ label: item.name, value: item.id }))}
                    placeholder="Chọn loại sản phẩm"
                    size="large"
                  />
                </Form.Item>
                <Form.Item label="Số sản phẩm đã duyệt" name="quantity" style={{ flex: 1 }}>
                  <Input disabled size="large" />
                </Form.Item>
              </Flex>
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
      children: (
        <Flex gap={14} vertical>
          <Input
            placeholder="Tìm kiếm theo tên công thức"
            prefix={<Search className="prefix" color="#dadde1" size={16} viewBox="0 0 28 28" />}
            size="large"
          />
          <Table
            className="product-form-table"
            columns={formulaColumns}
            dataSource={formulaData}
            footer={() => (
              <Link className="btn-link-primary" to={paths.formula}>
                + Thêm mới công thức
              </Link>
            )}
            pagination={{ total: 5, pageSize: 3 }}
            rowSelection={{
              type: "checkbox",
              getCheckboxProps: (record) => ({ disabled: record?.disabled ? record?.disabled : false }),
            }}
          />
        </Flex>
      ),
      disabled: !isEdit,
    },
  ];

  return (
    <div className="wrapper product-form">
      <div className="content">
        <Header title={isEdit ? "Chi tiết sản phẩm" : "Tạo sản phẩm"} />
        <Tabs className="product-form-tab" items={productTabItems} />
      </div>
    </div>
  );
};
