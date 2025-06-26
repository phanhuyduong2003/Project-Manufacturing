import { Button, Flex, Form, Input, Radio } from "antd";
import { useEffect } from "react";
import { Link } from "react-router";

import { Header } from "@/components/Header";
import paths from "@/config/paths";

export const FormCategory = ({ isEdit = false }: { isEdit?: boolean }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({
        status: "apply",
        name: "Danh mục mẫu",
        description: "Mô tả danh mục mẫu",
      });
    }
  }, [isEdit, form]);

  return (
    <div className="wrapper declare create-common">
      <div className="content has-footer">
        <Header title={isEdit ? "Chi tiết danh mục sản phẩm" : "Tạo danh mục sản phẩm"} />
        <Form form={form} layout="vertical">
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
  );
};
