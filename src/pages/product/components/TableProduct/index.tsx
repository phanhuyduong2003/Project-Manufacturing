import { DatePicker, Empty, Flex, Input, Select, Switch, Table, TableProps } from "antd";
import { DefaultOptionType } from "antd/es/select";
import dayjs from "dayjs";
import { useState } from "react";
import { generatePath, Link } from "react-router";

import { Pencil, Search } from "@/assets/icons";
import paths from "@/config/paths";

export const TableProduct = () => {
  const [hasData, setHasData] = useState<boolean>(true);

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
      dataIndex: "productCode",
      key: "productCode",
    },
    {
      title: "Áp dụng",
      dataIndex: "apply",
      key: "apply",
      render: (text) => <Switch checked={text} />,
    },
    {
      title: "Thời gian tạo",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Người tạo",
      dataIndex: "createdBy",
      key: "createdBy",
      render: (text, record) => (
        <Flex justify="space-between">
          <span>{text}</span>
          <Link state={{ data: record }} to={generatePath(paths.productDetail, { id: record.key })}>
            <Pencil />
          </Link>
        </Flex>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      productCode: "PC 540A QM1013 VB01",
      apply: false,
      createdAt: "16-03-2021 09:47:35",
      createdBy: "Nguyễn Hoàng Huy",
    },
    {
      key: "2",
      productCode: "PC 540A QM1013 VB01",
      apply: true,
      createdAt: "16-03-2021 09:47:35",
      createdBy: "Nguyễn Hoàng Huy",
    },
  ];

  return (
    <Flex className="table-common" gap={6} vertical>
      <Flex gap={10}>
        <span>Có dữ liệu: </span>
        <Switch onChange={() => setHasData(!hasData)} value={hasData} />
      </Flex>
      <Flex align="normal" className="table-filter-common" gap={8}>
        <DatePicker.RangePicker
          className="table-filter-common-item"
          defaultValue={[dayjs(), dayjs().add(1, "month")]}
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
        dataSource={hasData ? data : []}
        locale={{ emptyText: <Empty description={"Không tìm thấy dữ liệu"} image={Empty.PRESENTED_IMAGE_SIMPLE} /> }}
      />
    </Flex>
  );
};
