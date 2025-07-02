import { Button, DatePicker, Empty, Flex, Input, Select, Skeleton, Switch, Table, TableProps } from "antd";
import { DefaultOptionType } from "antd/es/select";
import dayjs from "dayjs";
import { useEffect } from "react";
import { generatePath, Link } from "react-router";

import { Pencil, Plus, Search } from "@/assets/icons";
import { EmptyCommon } from "@/components/Empty";
import paths from "@/config/paths";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAccounts } from "@/redux/slices/accountSlice";

export const Account = () => {
  const dispatch = useAppDispatch();
  const accountState = useAppSelector((state) => state.account);

  useEffect(() => {
    dispatch(getAccounts());
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
      title: "Tên tài khoản",
      dataIndex: "accountName",
      key: "accountName",
    },
    {
      title: "Áp dụng",
      dataIndex: "apply",
      key: "apply",
      render: (text, record) => <Switch checked={text} disabled={record.disabled} />,
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
          <Link state={{ data: record }} to={generatePath(paths.accountDetail, { id: record.key })}>
            <Pencil />
          </Link>
        </Flex>
      ),
    },
  ];
  const data = accountState.accounts.map((account) => ({
    key: account.id,
    accountName: account.name,
    apply: true,
    createdAt: "16-03-2021 09:47:35",
    createdBy: "Nguyễn Hoàng Huy",
    disabled: false,
  }));

  return (
    <div className="wrapper declare">
      <div className="content">
        <Flex gap={35} vertical>
          {accountState?.loading ? (
            <Skeleton active />
          ) : accountState.accounts.length > 0 ? (
            <>
              <Flex align="center" className="declare-header list-common-header" justify="space-between">
                <h1 className="declare-header-title list-common-header-title">Danh sách tài khoản</h1>
                <Link to={paths.accountCreate}>
                  <Button className="btn-primary" icon={<Plus />} iconPosition="end" type="primary">
                    Thêm tài khoản
                  </Button>
                </Link>
              </Flex>
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
                  loading={accountState.loading}
                  locale={{
                    emptyText: <Empty description={"Không tìm thấy dữ liệu"} image={Empty.PRESENTED_IMAGE_SIMPLE} />,
                  }}
                />
              </Flex>
            </>
          ) : (
            <EmptyCommon
              buttonText="Thêm tài khoản"
              description={
                <>
                  Bạn chưa có danh sách tài khoản nào.
                  <br />
                  Nhấn “Thêm tài khoản” để bắt đầu.
                </>
              }
              href={paths.accountCreate}
            />
          )}
        </Flex>
      </div>
    </div>
  );
};
