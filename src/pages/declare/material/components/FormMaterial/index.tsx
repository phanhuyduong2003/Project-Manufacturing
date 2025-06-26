import { Button, Divider, Flex, Form, Input, Modal, Radio, Table, TableProps, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router";

import { Info, Pencil, PlusCircle, Search, Trash } from "@/assets/icons";
import { Header } from "@/components/Header";
import paths from "@/config/paths";

export const FormMaterial = ({ isEdit = false }: { isEdit?: boolean }) => {
  const [formCategory] = Form.useForm();
  const [formUnit] = Form.useForm();
  const [openUnit, setOpenUnit] = useState<boolean>(false);
  const [openCreateUnit, setOpenCreateUnit] = useState<boolean>(false);
  const [unitName, setUnitName] = useState<string>("");

  useEffect(() => {
    if (isEdit) {
      formCategory.setFieldsValue({
        status: "apply",
        name: "Nguyên vật liệu mẫu",
        unit: "Mpa",
        description: "Mô tả nguyên vật liệu mẫu",
      });
    }
  }, [isEdit, formCategory]);

  const unitColumns: TableProps["columns"] = [
    {
      title: "Đơn vị",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Người tạo",
      dataIndex: "createdBy",
      key: "createdBy",
      align: "center",
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <Flex gap={12}>
          <Pencil />
          <Trash />
        </Flex>
      ),
      align: "center",
    },
  ];
  const unitData = [
    {
      key: "1",
      unit: "Mpa",
      description: "Mpa",
      createdBy: "user1",
    },
    {
      key: "2",
      unit: "10 g/cm3",
      description: "10 g/cm3",
      createdBy: "user2",
    },
    {
      key: "3",
      unit: "KJ/m2",
      description: "KJ/m2",
      createdBy: "user3",
    },
    {
      key: "4",
      unit: "%",
      description: "%",
      createdBy: "user4",
    },
    {
      key: "5",
      unit: "g/10min",
      description: "g/10min",
      createdBy: "user5",
    },
  ];

  return (
    <>
      <div className="wrapper declare create-common">
        <div className="content has-footer">
          <Header title={isEdit ? "Chi tiết danh mục nguyên vật liệu" : "Tạo danh mục nguyên vật liệu"} />
          <Form form={formCategory} layout="vertical">
            <Form.Item label="Trạng thái" name="status" rules={[{ required: true }]}>
              <Radio.Group
                className="custom-radio-group"
                options={[
                  { label: "Áp dụng", value: "apply" },
                  { label: "Không áp dụng", value: "not_apply" },
                ]}
                size="large"
              />
            </Form.Item>
            <Form.Item label="Tên danh mục" name="name" rules={[{ required: true }]}>
              <Input placeholder="Nhập tên danh mục" size="large" />
            </Form.Item>
            <Form.Item
              label={
                <Flex align="center" gap={8}>
                  Đơn vị
                  {!isEdit && (
                    <Tooltip title="Bấm vào để thêm đơn vị">
                      <Info cursor="pointer" onClick={() => setOpenUnit(true)} />
                    </Tooltip>
                  )}
                </Flex>
              }
              name="unit"
              rules={[{ required: true }]}
            >
              <Input placeholder="Nhập đơn vị" size="large" />
            </Form.Item>
            <Form.Item label="Mô tả danh mục" name="description">
              <Input.TextArea placeholder="Nhập mô tả danh mục" size="large" />
            </Form.Item>
          </Form>
        </div>
        <div className="create-common-footer">
          <Flex gap={12} justify="end">
            <Button className="btn-secondary" color="default" size="large" variant="filled">
              Hủy
            </Button>
            <Link to={paths.declareCategory}>
              <Button className="btn-primary" size="large" type="primary">
                {isEdit ? "Lưu" : "Tạo danh mục"}
              </Button>
            </Link>
          </Flex>
        </div>
      </div>
      <Modal
        centered
        classNames={{
          wrapper: "material-modal",
          header: "modal-header",
          content: "material-modal-content",
          footer: "material-modal-footer",
        }}
        footer={
          <Flex justify="space-between">
            <Button
              className="create-button btn-link-primary"
              icon={<PlusCircle />}
              onClick={() => setOpenCreateUnit(true)}
              type="link"
            >
              Tạo mới
            </Button>
            <Flex gap={8}>
              <Button color="default" onClick={() => setOpenUnit(false)} size="large" variant="filled">
                Hủy
              </Button>
              <Button className="btn-primary" size="large" type="primary">
                Lưu
              </Button>
            </Flex>
          </Flex>
        }
        onCancel={() => setOpenUnit(false)}
        open={openUnit}
        title="Danh sách đơn vị"
      >
        <Input placeholder="Tìm kiếm theo đơn vị" prefix={<Search viewBox="0 0 28 28" />} size="large" />
        <Divider size="small" />
        <Table columns={unitColumns} dataSource={unitData} pagination={false} />
      </Modal>
      <Modal
        centered
        footer={null}
        onCancel={() => {
          setOpenCreateUnit(false);
          formUnit.resetFields();
        }}
        open={openCreateUnit}
        width={320}
      >
        <Form
          form={formUnit}
          layout="vertical"
          onFinish={() => {
            setOpenCreateUnit(false);
            formUnit.resetFields();
          }}
        >
          <Form.Item label="Tên đơn vị" name="unit" rules={[{ required: true }]}>
            <Input
              maxLength={50}
              onChange={(e) => setUnitName(e.target.value)}
              placeholder="Ví dụ: cm"
              showCount
              size="large"
            />
          </Form.Item>
          <Form.Item label="Mô tả" name="description">
            <Input maxLength={50} placeholder="Ví dụ: cm, đây là đơn vị cm" showCount size="large" />
          </Form.Item>
          <Form.Item noStyle>
            <Button
              block
              className="btn-primary"
              disabled={!unitName || unitName.trim().length === 0}
              htmlType="submit"
              size="large"
              type="primary"
            >
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
