import { Button, Flex, Modal, Table, TableProps, Tabs, TabsProps } from "antd";

import { ModalCommonProps } from "@/types/common";

export const ModalFormula = ({ open, setOpen }: ModalCommonProps) => {
  const materialTabsColumns: TableProps["columns"] = [
    {
      key: "order",
      title: "STT",
      dataIndex: "order",
      align: "center",
    },
    {
      key: "material",
      title: "Nguyên liệu",
      dataIndex: "material",
    },
    {
      key: "percentage",
      title: "Tỉ lệ (%)",
      dataIndex: "percentage",
    },
    {
      key: "unit",
      title: "Đơn vị",
      dataIndex: "unit",
    },
  ];
  const dataMaterialTabs = [
    {
      key: "1",
      order: 1,
      material: "ABS ZA-0211G",
      percentage: "150",
      unit: "Mpa",
    },
    {
      key: "2",
      order: 2,
      material: "ABS MG47F Lồ",
      percentage: "150",
      unit: "KG",
    },
    {
      key: "3",
      order: 3,
      material: "Hạt màu đen DE4004",
      percentage: "150",
      unit: "g/10min",
    },
  ];

  const propertyTabsColumns: TableProps["columns"] = [
    {
      key: "order",
      title: "STT",
      dataIndex: "order",
      align: "center",
    },
    {
      key: "property",
      title: "Tính chất",
      dataIndex: "property",
    },
    {
      key: "value",
      title: "Số liệu",
      dataIndex: "value",
    },
    {
      key: "unit",
      title: "Đơn vị",
      dataIndex: "unit",
    },
  ];
  const dataProperty = [
    {
      key: "1",
      order: 1,
      property: "Tensile strength (BREAK)",
      value: "35.163",
      unit: "Mpa",
    },
    {
      key: "2",
      order: 2,
      property: "Tensile strength (YIELD)",
      value: "37.86",
      unit: "Mpa",
    },
    {
      key: "3",
      order: 3,
      property: "Elongation",
      value: "3.48",
      unit: "%",
    },
    {
      key: "4",
      order: 4,
      property: "MI",
      value: "150",
      unit: "g/10min",
    },
    {
      key: "5",
      order: 5,
      property: "IZOD Impact energy-5.5J - Unotched",
      value: "0.06",
      unit: "KJ/m3",
    },
    {
      key: "6",
      order: 6,
      property: "IZOD Impact energy-5.5J - Notched",
      value: "0.70",
      unit: "KJ/m3",
    },
    {
      key: "7",
      order: 7,
      property: "Color - L",
      value: "0.70",
      unit: "",
    },
    {
      key: "8",
      order: 8,
      property: "Color - a",
      value: "0.70",
      unit: "",
    },
    {
      key: "9",
      order: 9,
      property: "Color - b",
      value: "0.70",
      unit: "",
    },
    {
      key: "10",
      order: 10,
      property: "Color - ΔE",
      value: "0.70",
      unit: "",
    },
    {
      key: "11",
      order: 11,
      property: "Density",
      value: "0.70",
      unit: "g/cm3",
    },
  ];

  const formulaStandardTabItems: TabsProps["items"] = [
    {
      key: "material",
      label: "Nguyên liệu sản xuất",
      children: <Table columns={materialTabsColumns} dataSource={dataMaterialTabs} pagination={false} />,
    },
    {
      key: "property",
      label: "Kiểm định tính chất",
      children: <Table columns={propertyTabsColumns} dataSource={dataProperty} pagination={false} />,
    },
  ];

  return (
    <Modal
      centered
      classNames={{
        wrapper: "formula-modal",
        header: "formula-header modal-header",
        content: "formula-content",
        footer: "formula-footer",
      }}
      destroyOnHidden
      footer={
        <Button color="default" onClick={() => setOpen(false)} size="large" variant="filled">
          Huỷ
        </Button>
      }
      onCancel={() => setOpen(false)}
      open={open}
      title="Công thức chuẩn"
      width={1000}
    >
      <Flex gap={24} vertical>
        <Flex gap={4} vertical>
          <span className="formula-title">Nguyên liệu cấu thành</span>
          <p className="formula-text">Gồm có nguyên liệu nhựa và phụ gia</p>
        </Flex>
        <Tabs items={formulaStandardTabItems} />
      </Flex>
    </Modal>
  );
};
