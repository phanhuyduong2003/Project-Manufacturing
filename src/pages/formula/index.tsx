import {
  Button,
  Checkbox,
  Flex,
  Form,
  Input,
  List,
  Modal,
  Select,
  Table,
  TableProps,
  Tabs,
  TabsProps,
  Tag,
  Tooltip,
} from "antd";
import dayjs from "dayjs";
import { useState } from "react";

import { Calendar, CheckCircle, Close, Copy, Info, Listing, Plus, Search, Trash } from "@/assets/icons";
import { Header } from "@/components/Header";

export const Formula = () => {
  const [currentTab, setCurrentTab] = useState<"detail" | "history">("detail");
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [openFormula, setOpenFormula] = useState<boolean>(false);
  const [openMaterial, setOpenMaterial] = useState<boolean>(false);
  const [materialSelected, setMaterialSelected] = useState<string[]>([]);

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
  const dataMaterial = [
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
  const formulaTabItems: TabsProps["items"] = [
    {
      key: "detail",
      label: "Chi tiết công thức",
      children: (
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
                <Select placeholder="Chọn mã sản phẩm" size="large" />
              </Form.Item>
              <Form.Item initialValue="HUY.NH" label="Người phê duyệt" name="approvedBy" style={{ flex: 0.2 }}>
                <Select placeholder="Chọn người phê duyệt" size="large" />
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
      ),
      className: "formula-detail",
    },
    {
      key: "history",
      label: "Lịch sử phê duyệt",
      children: <div>Lịch sử phê duyệt</div>,
      className: "formula-history",
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

  const dataMaterialList = ["ABS ZA-0211G", "ABS MG47F Lồ", "Hạt màu đen DE4004"];
  //   const dataMaterialSelectedList = ["ABS ZA-0211G", "ABS MG47F Lồ"];

  return (
    <>
      <div className="wrapper formula create-common">
        <div className="content has-footer">
          <Header title="Tạo công thức" />
          <Tabs items={formulaTabItems} onChange={(key) => setCurrentTab(key as "detail" | "history")} />
        </div>
        {currentTab === "detail" && (
          <Flex className="formula-detail-footer create-common-footer" gap={12} justify="end">
            <Button
              color="green"
              icon={<CheckCircle size={20} viewBox="0 0 20 20" />}
              iconPosition="end"
              size="large"
              variant="filled"
            >
              Chuyển phê duyệt
            </Button>
            <Button className="btn-primary" size="large" type="primary">
              Lưu nháp
            </Button>
            <Button
              disabled
              icon={<Copy size={20} viewBox="0 0 20 20" />}
              iconPosition="end"
              size="large"
              variant="filled"
            >
              Tạo bản sao
            </Button>
            <Button color="default" size="large" variant="filled">
              Huỷ
            </Button>
          </Flex>
        )}
      </div>
      <Modal
        centered
        classNames={{ wrapper: "confirm-modal", content: "confirm-content" }}
        closeIcon={null}
        destroyOnHidden
        footer={null}
        onCancel={() => setOpenConfirm(false)}
        open={openConfirm}
        width={360}
      >
        <Flex align="flex-start" gap={8} vertical>
          <Info color="#1a99f4" size={48} />
          <span className="confirm-title">Xác nhận xoá</span>
          <p className="confirm-text">Xác nhận xoá. Những thay đổi của bạn sẽ không thể khôi phục nữa.</p>
          <Flex className="confirm-action" gap={12}>
            <Button block color="default" onClick={() => setOpenConfirm(false)} size="large" variant="filled">
              Huỷ
            </Button>
            <Button block className="btn-primary" size="large" type="primary">
              Xác nhận
            </Button>
          </Flex>
        </Flex>
      </Modal>
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
          <Button color="default" onClick={() => setOpenFormula(false)} size="large" variant="filled">
            Huỷ
          </Button>
        }
        onCancel={() => setOpenFormula(false)}
        open={openFormula}
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
      <Modal
        centered
        classNames={{
          wrapper: "material-modal",
          header: "material-header modal-header",
          content: "material-content",
          body: "material-body",
          footer: "material-footer",
        }}
        footer={
          <Flex gap={12} justify="end">
            <Button color="default" onClick={() => setOpenMaterial(false)} size="large" variant="filled">
              Huỷ
            </Button>
            <Button
              className="btn-primary"
              onClick={() => {
                setOpenMaterial(false);
                dataMaterial.push(
                  ...materialSelected.map((item, index) => ({
                    key: (dataMaterial.length + index + 1).toString(),
                    order: dataMaterial.length + index + 1,
                    material: item,
                    percentage: "150",
                    unit: "Mpa",
                  })),
                );
                setMaterialSelected([]);
              }}
              size="large"
              type="primary"
            >
              Xong
            </Button>
          </Flex>
        }
        onCancel={() => setOpenMaterial(false)}
        open={openMaterial}
        title="Danh sách nguyên vật liệu"
        width={880}
      >
        <Flex>
          <Flex style={{ flex: 0.7 }} vertical>
            <div className="material-search">
              <Input placeholder="Tìm kiếm nguyên liệu" prefix={<Search viewBox="0 0 28 28" />} size="large" />
            </div>
            <List
              className="material-list"
              dataSource={dataMaterialList}
              renderItem={(item: string) => (
                <List.Item
                  className="material-item"
                  key={item}
                  onClick={() => {
                    if (materialSelected.includes(item)) {
                      setMaterialSelected(materialSelected.filter((i) => i !== item));
                    } else {
                      setMaterialSelected([...materialSelected, item]);
                    }
                  }}
                >
                  <Flex align="center" gap={12}>
                    <Listing />
                    <span className="material-item-name" style={{ flex: 1 }}>
                      {item}
                    </span>
                    <Checkbox
                      checked={materialSelected.includes(item)}
                      onClick={() => {
                        if (materialSelected.includes(item)) {
                          setMaterialSelected(materialSelected.filter((i) => i !== item));
                        } else {
                          setMaterialSelected([...materialSelected, item]);
                        }
                      }}
                    />
                  </Flex>
                </List.Item>
              )}
            />
          </Flex>
          <Flex className="material-selected" gap={16} style={{ flex: 0.3 }} vertical>
            <span className="material-selected-title">Danh sách đã chọn</span>
            <List
              className="material-selected-list"
              dataSource={materialSelected}
              renderItem={(item: string) => (
                <List.Item className="material-selected-item" key={item}>
                  <Flex align="center" gap={12}>
                    <Listing />
                    <span className="material-selected-item-name" style={{ flex: 1 }}>
                      {item}
                    </span>
                    <Close
                      cursor="pointer"
                      onClick={() => {
                        setMaterialSelected(materialSelected.filter((i) => i !== item));
                      }}
                    />
                  </Flex>
                </List.Item>
              )}
            />
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};
