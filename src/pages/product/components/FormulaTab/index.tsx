import { Button, Flex, Input, Table, TableProps, Tag } from "antd";
import { Link } from "react-router";

import { Pencil, Search } from "@/assets/icons";
import paths from "@/config/paths";
import { useShowMessage } from "@/hooks/useShowMessage";
import { useAppSelector } from "@/redux/hooks";
import { FormulaTabProps } from "@/types/common";

export const FormulaTab = ({ disabledFormula, setActiveTab }: FormulaTabProps) => {
  const message = useShowMessage();
  const productState = useAppSelector((state) => state.product);

  const statusTags = [
    {
      label: "Đã duyệt",
      color: "#f7edff",
      textColor: "#391085",
      value: "approved",
    },
    {
      label: "Chờ duyệt",
      color: "#ffeecf",
      textColor: "#d46b08",
      value: "pending",
    },
    {
      label: "Đã huỷ",
      color: "#ffdad6",
      textColor: "#a8071a",
      value: "rejected",
    },
    {
      label: "Chờ đẩy",
      color: "#ddf3ff",
      textColor: "#0050b3",
      value: "draft",
    },
  ];
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
        <Tag
          color={statusTags.find((tag) => tag.value === text)?.color}
          style={{ color: statusTags.find((tag) => tag.value === text)?.textColor }}
        >
          {statusTags.find((tag) => tag.value === text)?.label}
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
  const data = productState.formulas.map((formula) => ({
    key: formula.id,
    status: "approved",
    formulaType: "standard",
    sampleName: "Mẫu thử tiêu chuẩn",
    createdAt: formula.createdAt,
    approvedBy: formula.approvedBy,
    disabledEdit: false,
  }));

  return (
    <Flex gap={14} vertical>
      <Input
        placeholder="Tìm kiếm theo tên công thức"
        prefix={<Search className="prefix" color="#dadde1" size={16} viewBox="0 0 28 28" />}
        size="large"
      />
      <Table
        className="product-form-table"
        columns={formulaColumns}
        dataSource={data}
        footer={() => {
          return disabledFormula ? (
            <Button
              className="btn-link-primary"
              onClick={() => {
                message.error("Bạn phải lưu sản phẩm trước khi tạo công thức");
                setActiveTab("product-detail");
              }}
              type="link"
            >
              + Thêm mới công thức
            </Button>
          ) : (
            <Link className="btn-link-primary" to={paths.formula}>
              + Thêm mới công thức
            </Link>
          );
        }}
        pagination={{ total: 5, pageSize: 3 }}
        rowSelection={{
          type: "checkbox",
          getCheckboxProps: (record) => ({ disabled: record?.disabled ? record?.disabled : false }),
        }}
      />
    </Flex>
  );
};
