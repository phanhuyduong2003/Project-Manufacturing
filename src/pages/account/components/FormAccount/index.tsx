import { Button, Checkbox, Flex, Form, Input, Radio } from "antd";
import { useEffect } from "react";
import { Link } from "react-router";

import { Header } from "@/components/Header";
import paths from "@/config/paths";

export const FormAccount = ({ isEdit = false }: { isEdit?: boolean }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({
        status: "apply",
        role: ["user", "approver"],
        username: "user123",
        name: "Nguyễn Văn A",
        email: "nguyen.van.a@example.com",
      });
    }
  }, [form, isEdit]);

  return (
    <div className="wrapper account create-common">
      <div className="content has-footer">
        <Header title={isEdit ? "Chi tiết tài khoản" : "Tạo tài khoản"} />
        <Form form={form} layout="vertical">
          <Form.Item label="Trạng thái" name="status" rules={[{ required: true }]}>
            <Radio.Group
              className="custom-radio-group"
              options={[
                { label: "Áp dụng", value: "apply", disabled: isEdit },
                { label: "Không áp dụng", value: "not_apply" },
              ]}
              size="large"
            />
          </Form.Item>
          <Form.Item label="Cung cấp cho tài khoản này vai trò" name="role">
            <Checkbox.Group
              className="custom-checkbox-group"
              defaultValue={["user"]}
              options={[
                { label: "Người dùng", value: "user", disabled: true },
                { label: "Người phê duyệt mẫu thử/ đơn thành phẩm (dành cho QC)", value: "approver" },
                { label: "Người quản trị hệ thống", value: "admin" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Tên đăng nhập của tài khoản (viết liền không dấu, không kí tự đặc biệt)"
            name="username"
            rules={[{ required: true }, { pattern: /^[a-zA-Z0-9]+$/, message: "Tên đăng nhập chỉ chứa chữ cái và số" }]}
          >
            <Input placeholder="Nhập tên đăng nhập" size="large" />
          </Form.Item>
          <Flex gap={12}>
            <Form.Item label="Tên đầy đủ của tài khoản" name="name" style={{ flex: 0.5 }}>
              <Input placeholder="Nhập tên đầy đủ" size="large" />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ type: "email" }]} style={{ flex: 0.5 }}>
              <Input placeholder="Nhập email" size="large" />
            </Form.Item>
          </Flex>
          <Form.Item label="Mật khẩu của tài khoản" name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="Nhập mật khẩu" size="large" />
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
              {isEdit ? "Lưu" : "Tạo tài khoản"}
            </Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
};
