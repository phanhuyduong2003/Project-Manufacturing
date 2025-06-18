import images from "@/assets/images";
import { Button, Flex, Form, Input } from "antd";

export const Login = () => {
  return (
    <Flex className="wrapper login" vertical style={{ backgroundImage: `url(${images.bg_login})` }}>
      <Flex className="login-header" gap={20} align="center">
        <div className="login-header-logo">
          <img src={images.logo} alt="" />
        </div>
        <div className="login-header-title">
          <h1 className="login-header-title-main">CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ P-CARE</h1>
          <p className="login-header-title-sub">P-CARE VIETNAM TRADING AND SERVICES COMPANY LIMITED</p>
        </div>
      </Flex>
      <Flex className="login-form" vertical align="center" justify="center" flex={1}>
        <h2 className="login-form-title">Đăng nhập</h2>
        <Form className="login-form-main" layout="vertical" requiredMark={false}>
          <Form.Item label="Tên đăng nhập (*)" name="username" rules={[{ required: true }]}>
            <Input placeholder="Nhập tên đăng nhập ở đây..." size="large" />
          </Form.Item>

          <Form.Item label="Mật khẩu (*)" name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="Nhập mật khẩu ở đây..." size="large" />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" size="large" block>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
};
