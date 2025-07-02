import { DatePicker, Empty, Flex, Input, Select, Switch, Table, TableProps } from "antd";
import { DefaultOptionType } from "antd/es/select";
import dayjs from "dayjs";
import { generatePath, Link } from "react-router";

import { Pencil, Search } from "@/assets/icons";
import paths from "@/config/paths";
import { TableProductProps } from "@/types/common";

export const TableProduct = ({ ...props }: TableProductProps) => {
  const formulaStatus: DefaultOptionType[] = [
    {
      label: "Chờ duyệt",
      value: "pending",
    },
  ];
  const productStatus: DefaultOptionType[] = [
    {
      label: "Đang hoạt động",
      value: "active",
    },
  ];

  const tableColumns: TableProps["columns"] = [
    {
      title: "Mã sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Áp dụng",
      dataIndex: "status",
      key: "status",
      render: (text) => <Switch checked={text} />,
    },
    {
      title: "Thời gian tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => dayjs(text + "Z").format("DD-MM-YYYY HH:mm:ss"),
    },
    {
      title: "Người tạo",
      dataIndex: "createdBy",
      key: "createdBy",
      render: (text, record) => (
        <Flex justify="space-between">
          <span>{text}</span>
          <Link state={{ data: record }} to={generatePath(paths.productDetail, { id: record.id })}>
            <Pencil />
          </Link>
        </Flex>
      ),
    },
  ];

  return (
    <Flex className="table-common" gap={6} vertical>
      <Flex align="normal" className="table-filter-common" gap={8}>
        <DatePicker.RangePicker
          className="table-filter-common-item"
          defaultValue={[dayjs().subtract(1, "month"), dayjs()]}
          disabledDate={(current) => current > dayjs()}
          format="D/M/YYYY"
          placeholder={["Bắt đầu", "Kết thúc"]}
          prefix={
            <>
              <span className="prefix">Ngày tạo: </span>Từ
            </>
          }
          //   separator="-"
        />
        <Select
          className="table-filter-common-item"
          defaultValue="pending"
          options={formulaStatus}
          prefix={<span className="prefix">Trạng thái công thức: </span>}
        />
        <Select
          className="table-filter-common-item"
          defaultValue="active"
          options={productStatus}
          prefix={<span className="prefix">Trạng thái sản phẩm: </span>}
        />
        <Input
          className="table-filter-common-item"
          placeholder="Tìm kiếm theo mã sản phẩm"
          prefix={<Search className="prefix" size={16} viewBox="0 0 28 28" />}
        />
      </Flex>
      <Table
        columns={tableColumns}
        dataSource={props.data}
        locale={{ emptyText: <Empty description={"Không tìm thấy dữ liệu"} image={Empty.PRESENTED_IMAGE_SIMPLE} /> }}
        rowKey={(record) => record.id}
      />
    </Flex>
  );
};
