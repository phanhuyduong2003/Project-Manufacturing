import { Button, DatePicker, Empty, Flex, Input, Select, Skeleton, Switch, Table, TableProps } from "antd";
import { DefaultOptionType } from "antd/es/select";
import dayjs from "dayjs";
import { useEffect } from "react";
import { generatePath, Link } from "react-router";

import { Pencil, Plus, Search } from "@/assets/icons";
import { EmptyCommon } from "@/components/Empty";
import paths from "@/config/paths";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCategories } from "@/redux/slices/declareSlice";

export const Category = () => {
  const dispatch = useAppDispatch();
  const declareState = useAppSelector((state) => state.declare);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
      title: "Tên danh mục",
      dataIndex: "categoryName",
      key: "categoryName",
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
          <Link state={{ data: record }} to={generatePath(paths.declareCategoryDetail, { id: record.key })}>
            <Pencil />
          </Link>
        </Flex>
      ),
    },
  ];
  const data = declareState.categories.map((category) => ({
    key: category.id,
    categoryName: category.name,
    apply: true,
    createdAt: "16-03-2021 09:47:35",
    createdBy: "Nguyễn Hoàng Huy",
  }));

  return (
    <div className="wrapper declare">
      <div className="content">
        <Flex gap={35} vertical>
          {declareState?.loading ? (
            <Skeleton active />
          ) : declareState.categories.length > 0 ? (
            <>
              <Flex align="center" className="declare-header list-common-header" justify="space-between">
                <h1 className="declare-header-title list-common-header-title">Danh mục sản phẩm</h1>
                <Link to={paths.declareCategoryCreate}>
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
                    disabledDate={(current) => current > dayjs()}
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
                  loading={declareState.loading}
                  locale={{
                    emptyText: <Empty description={"Không tìm thấy dữ liệu"} image={Empty.PRESENTED_IMAGE_SIMPLE} />,
                  }}
                />
              </Flex>
            </>
          ) : (
            <EmptyCommon
              buttonText="Tạo danh mục"
              description={
                <>
                  Bạn chưa có danh mục sản phẩm nào.
                  <br />
                  Nhấn “Tạo danh mục” để bắt đầu.
                </>
              }
              href={paths.declareCategoryCreate}
            />
          )}
        </Flex>
      </div>
    </div>
  );
};
