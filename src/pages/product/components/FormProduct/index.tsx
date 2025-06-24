import { Button, Flex, Form, Input, Radio, Select, Table, TableProps, Tabs, TabsProps, Tag } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { Link, useLocation } from "react-router";

import { Pencil, Search } from "@/assets/icons";
import { Header } from "@/components/Header";
import paths from "@/config/paths";

export const FormProduct = ({ isEdit = false }: { isEdit?: boolean }) => {
  const [form] = Form.useForm();
  const { data } = useLocation().state || {};

  useEffect(() => {
    if (isEdit && data) {
      form.setFieldsValue({
        productStatus: 1,
        createdDate: dayjs(data?.createdAt, "DD-MM-YYYY HH:mm:ss").format("DD/MM/YYYY"),
        createdBy: data?.createdBy,
        productCode: data?.productCode,
        productName: "Sản phẩm mẫu",
        productType: "Loại sản phẩm 1",
        productQuantity: 100,
      });
    }
  }, [form, isEdit, data]);

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
          <Form
            form={form}
            initialValues={{ productStatus: 1, createdDate: dayjs().format("DD/MM/YYYY"), createdBy: "Nguyễn Văn A" }}
            layout="vertical"
          >
            <Form.Item label="Trạng thái sản phẩm" name="productStatus" rules={[{ required: true }]}>
              <Radio.Group
                options={[
                  { value: 1, label: "Áp dụng" },
                  { value: 2, label: "Không áp dụng" },
                ]}
              />
            </Form.Item>
            <Flex gap={10}>
              <Form.Item label="Mã sản phẩm" name="productCode" rules={[{ required: true }]} style={{ flex: 1 }}>
                <Input size="large" />
              </Form.Item>
              <Form.Item label="Ngày tạo" name="createdDate">
                <Input disabled size="large" />
              </Form.Item>
              <Form.Item label="Người tạo" name="createdBy">
                <Input disabled size="large" />
              </Form.Item>
            </Flex>
            <Form.Item label="Tên sản phẩm" name="productName">
              <Input placeholder="Nhập tên, mô tả sản phẩm" size="large" />
            </Form.Item>
            <Flex gap={10}>
              <Form.Item label="Loại sản phẩm" name="productType" style={{ flex: 0.5 }}>
                <Select placeholder="Chọn loại sản phẩm" size="large" />
              </Form.Item>
              <Form.Item label="Số sản phẩm đã duyệt" name="productQuantity" style={{ flex: 1 }}>
                <Input disabled size="large" />
              </Form.Item>
            </Flex>
          </Form>
          <div className="product-form-footer">
            <Flex gap={12} justify="end">
              <Button className="btn-secondary" color="default" size="large" variant="filled">
                Hủy
              </Button>
              <Link to={paths.product}>
                <Button className="btn-primary" size="large" type="primary">
                  Lưu
                </Button>
              </Link>
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
    },
  ];

  return (
    <div className="wrapper product-form">
      <div className="content">
        <Header title="Chi tiết sản phẩm" />
        <Tabs className="product-form-tab" items={productTabItems} />
      </div>
    </div>
  );
};
