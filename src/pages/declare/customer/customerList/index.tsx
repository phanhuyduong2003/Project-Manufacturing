import { Button, DatePicker, Empty, Flex, Input, Select, Switch, Table, TableProps } from "antd";
import { DefaultOptionType } from "antd/es/select";
import dayjs from "dayjs";
import { generatePath, Link } from "react-router";

import { Pencil, Plus, Search } from "@/assets/icons";
import { EmptyCommon } from "@/components/Empty";
import paths from "@/config/paths";

export const Customer = () => {
  const status: DefaultOptionType[] = [
    {
      label: "Tất cả",
      value: "all",
    },
  ];
  const createdBy: DefaultOptionType[] = [
    {
      label: "Nguyễn Hoàng Huy",
      value: "Nguyễn Hoàng Huy",
    },
  ];

  const tableColumns: TableProps["columns"] = [
    {
      title: "Tên khách hàng",
      dataIndex: "customerName",
      key: "customerName",
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
          <Link state={{ data: record }} to={generatePath(paths.declareCustomerDetail, { id: record.key })}>
            <Pencil />
          </Link>
        </Flex>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      customerName: "Công ty TNHH Vinfast",
      apply: false,
      createdAt: "16-03-2021 09:47:35",
      createdBy: "Nguyễn Hoàng Huy",
    },
    {
      key: "2",
      customerName: "Công ty cổ phần Thaco Việt Nam",
      apply: true,
      createdAt: "16-03-2021 09:47:35",
      createdBy: "Nguyễn Hoàng Huy",
    },
  ];

  return (
    <div className="wrapper declare">
      <div className="content">
        <Flex gap={35} vertical>
          <Flex align="center" className="declare-header list-common-header" justify="space-between">
            <h1 className="declare-header-title list-common-header-title">Danh mục khách hàng</h1>
            <Link to={paths.declareCustomerCreate}>
              <Button className="btn-primary" icon={<Plus />} iconPosition="end" type="primary">
                Tạo danh mục
              </Button>
            </Link>
          </Flex>
          <Flex className="table-common" gap={6} vertical>
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
              />
              <Select
                className="table-filter-common-item"
                defaultValue="all"
                options={status}
                prefix={<span className="prefix">Trạng thái: </span>}
              />
              <Select
                className="table-filter-common-item"
                defaultValue="Nguyễn Hoàng Huy"
                options={createdBy}
                prefix={<span className="prefix">Người tạo: </span>}
              />
              <Input
                className="table-filter-common-item"
                placeholder="Tìm kiếm theo mã sản phẩm"
                prefix={<Search className="prefix" size={16} viewBox="0 0 28 28" />}
              />
            </Flex>
            <Table
              columns={tableColumns}
              dataSource={data}
              locale={{
                emptyText: <Empty description={"Không tìm thấy dữ liệu"} image={Empty.PRESENTED_IMAGE_SIMPLE} />,
              }}
            />
          </Flex>
          <EmptyCommon
            buttonText="Tạo danh mục"
            description={
              <>
                Bạn chưa có danh mục khách hàng nào.
                <br />
                Nhấn “Tạo danh mục” để bắt đầu.
              </>
            }
            href={paths.declareCustomerCreate}
          />
        </Flex>
      </div>
    </div>
  );
};
