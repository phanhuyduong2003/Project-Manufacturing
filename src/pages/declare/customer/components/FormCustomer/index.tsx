import { Button, Flex, Form, Input, Radio } from "antd";
import { useEffect } from "react";
import { Link } from "react-router";

import { Header } from "@/components/Header";
import paths from "@/config/paths";

export const FormCustomer = ({ isEdit = false }: { isEdit?: boolean }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({
        status: "apply",
        name: "Công ty TNHH Vinfast",
        email: "contact@vinfast.com",
        address: "Hà Nội, Việt Nam",
        phone: "0123456789",
        website: "https://vinfast.com",
        note: "Khách hàng VIP",
      });
    }
  }, [form, isEdit]);

  return (
    <div className="wrapper declare create-common">
      <div className="content has-footer">
        <Header title={isEdit ? "Chi tiết danh mục khách hàng" : "Tạo danh mục khách hàng"} />
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
          <Form.Item label="Tên khách hàng" name="name" rules={[{ required: true }]}>
            <Input placeholder="Nhập tên khách hàng" size="large" />
          </Form.Item>
          <Flex gap={12}>
            <Form.Item label="Email khách hàng" name="email" rules={[{ type: "email" }]} style={{ flex: 0.5 }}>
              <Input placeholder="Nhập email" size="large" />
            </Form.Item>
            <Form.Item label="Địa chỉ" name="address" style={{ flex: 0.5 }}>
              <Input placeholder="Nhập địa chỉ" size="large" />
            </Form.Item>
          </Flex>
          <Flex gap={12}>
            <Form.Item
              label="Số điện thoại (máy bàn/máy di động)"
              name="phone"
              rules={[{ required: true }]}
              style={{ flex: 0.5 }}
            >
              <Input placeholder="Nhập số điện thoại" size="large" />
            </Form.Item>
            <Form.Item label="Website chính thức" name="website" style={{ flex: 0.5 }}>
              <Input placeholder="https://" size="large" />
            </Form.Item>
          </Flex>
          <Form.Item label="Ghi chú cho khách hàng" name="note">
            <Input.TextArea placeholder="Nhập ghi chú" rows={4} />
          </Form.Item>
        </Form>
      </div>
      <div className="create-common-footer">
        <Flex gap={12} justify="end">
          <Button className="btn-secondary" color="default" size="large" variant="filled">
            Hủy
          </Button>
          <Link to={paths.declareCustomer}>
            <Button className="btn-primary" size="large" type="primary">
              {isEdit ? "Lưu" : "Tạo danh mục"}
            </Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
};
