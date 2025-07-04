import { Button, Flex, Form, Input, Select, Table, TableProps, Tabs, TabsProps, Tag, Tooltip } from "antd";
import dayjs from "dayjs";

import { Calendar, Info, Plus, Trash } from "@/assets/icons";
import { useAppSelector } from "@/redux/hooks";
import { FormulaDetailTabProps } from "@/types/common";

export const FormulaDetailTab = ({ setOpenMaterial, setOpenConfirm, setOpenFormula }: FormulaDetailTabProps) => {
  const productState = useAppSelector((state) => state.product);
  const accountState = useAppSelector((state) => state.account);

  const dataMaterial = productState.formulaMaterials.map((item, index) => ({
    key: (index + 1).toString(),
    order: index + 1,
    material: item.formula.name,
    percentage: item.quantity,
    unit: item.unit,
  }));

  const materialColumns: TableProps["columns"] = [
    {
      key: "order",
      title: "STT",
      dataIndex: "order",
      align: "center",
    },
    {
      key: "material",
      title: "Chọn nguyên vật liệu",
      dataIndex: "material",
      render: (text) => <Select onClick={() => setOpenMaterial(true)} value={text} />,
      width: "40%",
      align: "center",
    },
    {
      key: "percentage",
      title: "Tỉ lệ (%)",
      dataIndex: "percentage",
      render: (text) => <Input value={text} />,
      align: "center",
    },
    {
      key: "unit",
      title: "Đơn vị",
      dataIndex: "unit",
      render: (text) => (
        <Flex gap={20}>
          <Input disabled value={text} />
          <Trash cursor="pointer" onClick={() => setOpenConfirm(true)} />
        </Flex>
      ),
      align: "center",
    },
  ];

  const formulaSetupTabItems: TabsProps["items"] = [
    {
      key: "material",
      label: "Nguyên liệu sản xuất",
      children: (
        <Table
          className="border-outline footer-transparent"
          columns={materialColumns}
          dataSource={dataMaterial}
          footer={() => (
            <Flex gap={10}>
              <Button
                className="btn-primary"
                icon={<Plus />}
                iconPosition="end"
                onClick={() => setOpenMaterial(true)}
                type="primary"
              >
                Thêm ngay
              </Button>
              <Button danger icon={<Trash />} onClick={() => setOpenConfirm(true)}>
                Xoá dòng
              </Button>
            </Flex>
          )}
          rowSelection={{ type: "checkbox" }}
        />
      ),
    },
    {
      key: "property",
      label: "Kiểm định tính chất",
      children: (
        <Flex className="property-list" gap={36} vertical>
          <Flex align="center" className="property-item" gap={12}>
            <span className="property-item-title">Tensile strength (BREAK):</span>
            <Input size="large" value="35.163" />
            <Input className="property-item-unit" disabled size="large" value="Mpa" />
          </Flex>
          <Flex align="center" className="property-item" gap={12}>
            <span className="property-item-title">Tensile strength (YIELD):</span>
            <Input size="large" value="37.86" />
            <Input className="property-item-unit" disabled size="large" value="Mpa" />
          </Flex>
          <Flex align="center" className="property-item" gap={12}>
            <span className="property-item-title">Elongation:</span>
            <Input size="large" value="3.48" />
            <Input className="property-item-unit" disabled size="large" value="%" />
          </Flex>
          <Flex align="center" className="property-item" gap={12}>
            <span className="property-item-title">MI:</span>
            <Input size="large" />
            <Input className="property-item-unit" disabled size="large" value="g/10min" />
          </Flex>
          <Flex className="property-item" gap={18} vertical>
            <span className="property-item-title">IZOD Impact energy-5.5J</span>
            <Flex className="property-subitem-list" gap={9} vertical>
              <Flex align="center" className="property-subitem" gap={12}>
                <span className="property-subitem-title">Unotched:</span>
                <Input size="large" value="35.978" />
                <Input className="property-subitem-unit" disabled size="large" value="KJ/m2" />
              </Flex>
              <Flex align="center" className="property-subitem" gap={12}>
                <span className="property-subitem-title">Notched:</span>
                <Input size="large" value="10.25" />
                <Input className="property-subitem-unit" disabled size="large" value="KJ/m2" />
              </Flex>
            </Flex>
          </Flex>
          <Flex className="property-item" gap={18} vertical>
            <span className="property-item-title">Color</span>
            <Flex className="property-subitem-list" gap={9} vertical>
              <Flex align="center" className="property-subitem" gap={12}>
                <span className="property-subitem-title">L:</span>
                <Input size="large" value="28.93" />
                <Input className="property-subitem-unit" disabled size="large" value="" />
              </Flex>
              <Flex align="center" className="property-subitem" gap={12}>
                <span className="property-subitem-title">a:</span>
                <Input size="large" value="0.1" />
                <Input className="property-subitem-unit" disabled size="large" />
              </Flex>
              <Flex align="center" className="property-subitem" gap={12}>
                <span className="property-subitem-title">b:</span>
                <Input size="large" value="-0.95" />
                <Input className="property-subitem-unit" disabled size="large" />
              </Flex>
              <Flex align="center" className="property-subitem" gap={12}>
                <span className="property-subitem-title">ΔE:</span>
                <Input size="large" value=">2.00" />
                <Input className="property-subitem-unit" disabled size="large" />
              </Flex>
            </Flex>
          </Flex>
          <Flex align="center" className="property-item" gap={12}>
            <span className="property-item-title">Density:</span>
            <Input size="large" value="1.0715" />
            <Input className="property-item-unit" disabled size="large" value="g/cm3" />
          </Flex>
        </Flex>
      ),
    },
  ];

  return (
    <Flex gap={16} vertical>
      <Form layout="vertical">
        <Form.Item label="Trạng thái công thức">
          <Tag color="#ddf3ff" style={{ color: "#0050b3" }}>
            Chờ đẩy
          </Tag>
        </Form.Item>
        <Flex gap={12}>
          <Form.Item label="Tên mẫu thử" name="sampleName" rules={[{ required: true }]} style={{ flex: 1 }}>
            <Input placeholder="Nhập tên mẫu thử" size="large" />
          </Form.Item>
          <Form.Item initialValue={dayjs().format("DD/MM/YYYY")} label="Ngày tạo" name="createdAt">
            <Input disabled size="large" suffix={<Calendar size={20} viewBox="0 0 20 20" />} />
          </Form.Item>
        </Flex>
        <Flex gap={12}>
          <Form.Item label="Mã sản phẩm" name="productCode" rules={[{ required: true }]} style={{ flex: 0.6 }}>
            <Select
              options={productState.products.map((product) => ({ label: product.name, value: product.id }))}
              placeholder="Chọn mã sản phẩm"
              size="large"
            />
          </Form.Item>
          <Form.Item label="Người phê duyệt" name="approvedBy" style={{ flex: 0.2 }}>
            <Select
              options={accountState.accounts.map((account) => ({ label: account.name, value: account.id }))}
              placeholder="Chọn người phê duyệt"
              size="large"
            />
          </Form.Item>
          <Form.Item initialValue="User1" label="Người tạo" name="createdBy" style={{ flex: 0.2 }}>
            <Input disabled placeholder="Chọn người tạo" size="large" />
          </Form.Item>
        </Flex>
        <Form.Item
          label={
            <Flex align="center" gap={10}>
              <span>Thiết lập công thức và kiểm định cơ tính</span>
              <Tooltip title="Hiển thị công thức chuẩn">
                <Info cursor="pointer" onClick={() => setOpenFormula(true)} />
              </Tooltip>
            </Flex>
          }
          name="setup"
        >
          <Tabs className="setup-tabs" items={formulaSetupTabItems} />
        </Form.Item>
      </Form>
    </Flex>
  );
};
