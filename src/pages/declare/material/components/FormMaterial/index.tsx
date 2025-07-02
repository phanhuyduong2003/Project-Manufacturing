import { Button, Divider, Flex, Form, Input, Modal, Radio, Skeleton, Table, TableProps, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { generatePath, Link, useNavigate } from "react-router";

import { Info, Pencil, PlusCircle, Search, Trash } from "@/assets/icons";
import { Header } from "@/components/Header";
import paths from "@/config/paths";
import { useShowMessage } from "@/hooks/useShowMessage";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  createMaterial,
  createUnit,
  deleteUnit,
  getMaterialById,
  getUnits,
  updateMaterial,
  updateUnit,
} from "@/redux/slices/declareSlice";
import { ValuesFormCreateUnit, ValuesFormMaterial, ValuesFormUpdateUnit } from "@/types/common";

export const FormMaterial = ({ isEdit = false }: { isEdit?: boolean }) => {
  const [formCategory] = Form.useForm();
  const [formUnit] = Form.useForm();
  const message = useShowMessage();
  const navigate = useNavigate();
  const [openUnit, setOpenUnit] = useState<boolean>(false);
  const [openCreateUnit, setOpenCreateUnit] = useState<boolean>(false);
  const [unitName, setUnitName] = useState<string>("");
  const [isEditUnit, setIsEditUnit] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const declareState = useAppSelector((state) => state.declare);
  const materialID = Number(window.location.pathname.split("/").pop());

  useEffect(() => {
    if (isEdit && materialID) {
      dispatch(getMaterialById(materialID));
    }
  }, [dispatch, isEdit, materialID]);
  useEffect(() => {
    if (isEdit) {
      formCategory.setFieldsValue({
        status: "apply",
        name: declareState.materialDetail?.name,
        unit: "Mpa",
        description: "Mô tả nguyên vật liệu mẫu",
      });
    }
  }, [isEdit, formCategory, declareState.materialDetail?.name]);
  //   useEffect(() => {
  //     if (!isEdit) {
  //       dispatch(getUnits());
  //     }
  //   }, [dispatch, isEdit]);

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
      //   align: "center",
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Flex gap={12}>
          <Pencil
            cursor="pointer"
            onClick={() => {
              setOpenCreateUnit(true);
              setIsEditUnit(true);
              formUnit.setFieldsValue({ id: record.key, unit: record.unit, description: record.description });
            }}
          />
          <Trash cursor="pointer" onClick={() => handleDeleteUnit(record.key)} />
        </Flex>
      ),
      align: "center",
    },
  ];
  const unitData = declareState.units.map((unit) => ({
    key: unit.id,
    unit: unit.name,
    description: "Mô tả đơn vị mẫu",
    createdBy: "Nguyễn Hoàng Huy",
  }));

  const handleCreateMaterial = async (values: ValuesFormMaterial) => {
    const data = {
      name: values.name,
    };
    const response = await dispatch(createMaterial(data));
    if (createMaterial.fulfilled.match(response)) {
      message.success("Tạo nguyên vật liệu thành công");
      formCategory.resetFields();
      setTimeout(() => {
        navigate(generatePath(paths.declareMaterialDetail, { id: response.payload.id }), { replace: true });
      }, 1000);
    }
  };
  const handleUpdateMaterial = async (values: ValuesFormMaterial) => {
    const data = {
      id: materialID,
      name: values.name,
      formulaMaterials: declareState.materialDetail?.formulaMaterials ?? [],
    };
    const response = await dispatch(updateMaterial(data));
    if (updateMaterial.fulfilled.match(response)) {
      message.success("Cập nhật nguyên vật liệu thành công");
    }
    if (updateMaterial.rejected.match(response)) {
      message.error("Cập nhật nguyên vật liệu thất bại");
    }
  };
  const handleCreateUnit = async (values: ValuesFormCreateUnit) => {
    const data = {
      name: values.unit,
    };
    const response = await dispatch(createUnit(data));
    if (createUnit.fulfilled.match(response)) {
      message.success("Tạo đơn vị thành công");
      formUnit.resetFields();
      setOpenCreateUnit(false);
    }
    if (createUnit.rejected.match(response)) {
      message.error("Tạo đơn vị thất bại");
    }
  };
  const handleUpdateUnit = async (values: ValuesFormUpdateUnit) => {
    const data = {
      id: values.id,
      name: values.unit,
      formulaMaterials: declareState.materialDetail?.formulaMaterials ?? [],
    };
    const response = await dispatch(updateUnit(data));
    if (updateUnit.fulfilled.match(response)) {
      message.success("Cập nhật đơn vị thành công");
      formUnit.resetFields();
      setOpenCreateUnit(false);
    }
    if (updateUnit.rejected.match(response)) {
      message.error("Cập nhật đơn vị thất bại");
    }
  };
  const handleDeleteUnit = async (id: number) => {
    const response = await dispatch(deleteUnit(id));
    if (deleteUnit.fulfilled.match(response)) {
      message.success("Xoá đơn vị thành công");
    }
    if (deleteUnit.rejected.match(response)) {
      message.error("Xoá đơn vị thất bại");
    }
  };

  return (
    <>
      <div className="wrapper declare create-common">
        <div className="content has-footer">
          <Header title={isEdit ? "Chi tiết danh mục nguyên vật liệu" : "Tạo danh mục nguyên vật liệu"} />
          {declareState?.loadingDetail ? (
            <Skeleton active />
          ) : (
            <Form
              form={formCategory}
              layout="vertical"
              name="form-material"
              onFinish={isEdit ? handleUpdateMaterial : handleCreateMaterial}
            >
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
                        <Info
                          cursor="pointer"
                          onClick={async () => {
                            setOpenUnit(true);
                            await dispatch(getUnits());
                          }}
                        />
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
          )}
        </div>
        <div className="create-common-footer">
          <Flex gap={12} justify="end">
            <Link to={paths.declareCategory}>
              <Button className="btn-secondary" color="default" size="large" variant="filled">
                Hủy
              </Button>
            </Link>
            <Button
              className="btn-primary"
              form="form-material"
              htmlType="submit"
              loading={declareState.loading}
              size="large"
              type="primary"
            >
              {isEdit ? "Lưu" : "Tạo danh mục"}
            </Button>
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
        <Table
          columns={unitColumns}
          dataSource={unitData}
          loading={declareState.loading}
          pagination={{ pageSize: 5, total: unitData.length }}
        />
      </Modal>
      <Modal
        centered
        destroyOnHidden
        footer={null}
        onCancel={() => {
          setOpenCreateUnit(false);
          formUnit.resetFields();
          setUnitName("");
          setIsEditUnit(false);
        }}
        open={openCreateUnit}
        width={320}
      >
        <Form form={formUnit} layout="vertical" onFinish={isEditUnit ? handleUpdateUnit : handleCreateUnit}>
          {isEditUnit && (
            <Form.Item hidden label="ID" name="id">
              <Input />
            </Form.Item>
          )}
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
              loading={declareState.loading}
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
