import { Button, Flex, Form, Input, Radio } from "antd";
import { useEffect } from "react";
import { generatePath, Link, useNavigate } from "react-router";

import { Header } from "@/components/Header";
import paths from "@/config/paths";
import { useShowMessage } from "@/hooks/useShowMessage";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createCategory, getCategoryById, updateCategory } from "@/redux/slices/declareSlice";
import { ValuesFormCategory } from "@/types/common";

export const FormCategory = ({ isEdit = false }: { isEdit?: boolean }) => {
  const [form] = Form.useForm();
  const message = useShowMessage();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const declareState = useAppSelector((state) => state.declare);
  const categoryID = Number(window.location.pathname.split("/").pop());

  useEffect(() => {
    if (isEdit && categoryID) {
      dispatch(getCategoryById(categoryID));
    }
  }, [dispatch, isEdit, categoryID]);
  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({
        status: "apply",
        name: declareState.categoryDetail?.name,
      });
    }
  }, [isEdit, form, declareState.categoryDetail]);

  const handleCreateCategory = async (values: ValuesFormCategory) => {
    const data = {
      name: values.name,
    };
    const response = await dispatch(createCategory(data));
    if (createCategory.fulfilled.match(response)) {
      message.success("Tạo danh mục sản phẩm thành công");
      form.resetFields();
      setTimeout(() => {
        navigate(generatePath(paths.declareCategoryDetail, { id: response.payload.id }));
      }, 1000);
    }
    if (createCategory.rejected.match(response)) {
      message.error("Tạo danh mục sản phẩm thất bại");
    }
  };
  const handleUpdateCategory = async (values: ValuesFormCategory) => {
    const data = {
      id: categoryID,
      name: values.name,
      products: declareState.categoryDetail?.products ?? [],
    };
    const response = await dispatch(updateCategory(data));
    if (updateCategory.fulfilled.match(response)) {
      message.success("Cập nhật danh mục sản phẩm thành công");
    }
    if (updateCategory.rejected.match(response)) {
      message.error("Cập nhật danh mục sản phẩm thất bại");
    }
  };

  return (
    <div className="wrapper declare create-common">
      <div className="content has-footer">
        <Header title={isEdit ? "Chi tiết danh mục sản phẩm" : "Tạo danh mục sản phẩm"} />
        <Form
          form={form}
          layout="vertical"
          name="form-category"
          onFinish={isEdit ? handleUpdateCategory : handleCreateCategory}
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
          <Form.Item label="Mô tả danh mục" name="description">
            <Input.TextArea placeholder="Nhập mô tả danh mục" size="large" />
          </Form.Item>
        </Form>
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
            form="form-category"
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
  );
};
