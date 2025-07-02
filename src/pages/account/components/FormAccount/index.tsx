import { Button, Checkbox, Flex, Form, Input, Radio } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import { Header } from "@/components/Header";
import paths from "@/config/paths";
import { useShowMessage } from "@/hooks/useShowMessage";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createAccount, getAccountById, updateAccount } from "@/redux/slices/accountSlice";
import { ValuesFormAccount } from "@/types/common";

export const FormAccount = ({ isEdit = false }: { isEdit?: boolean }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const message = useShowMessage();
  const dispatch = useAppDispatch();
  const accountState = useAppSelector((state) => state.account);
  const accountID = Number(window.location.pathname.split("/").pop());

  useEffect(() => {
    if (isEdit && accountID) {
      dispatch(getAccountById(accountID));
    }
  }, [dispatch, isEdit, accountID]);
  useEffect(() => {
    if (isEdit && accountState.accountDetail) {
      form.setFieldsValue({
        status: "apply",
        role: ["Người dùng", accountState.accountDetail.role],
        username: accountState.accountDetail.username,
        name: accountState.accountDetail.name,
        password: accountState.accountDetail.password,
      });
    }
  }, [form, isEdit, accountState.accountDetail]);

  const handleCreateAccount = async (values: ValuesFormAccount) => {
    const data = {
      role: values.role[1] || "Người dùng",
      username: values.username,
      name: values.name,
      email: values.email,
      password: values.password,
    };
    console.log(data);
    const response = await dispatch(createAccount(data));
    if (createAccount.fulfilled.match(response)) {
      message.success("Tạo tài khoản thành công");
      form.resetFields();
      setTimeout(() => {
        navigate(paths.account);
      }, 1000);
    }
    if (createAccount.rejected.match(response)) {
      message.error("Tạo tài khoản thất bại");
    }
  };
  const handleUpdateAccount = async (values: ValuesFormAccount) => {
    if (isEdit) {
      const data = {
        id: accountID,
        role: values.role[1] || "Người dùng",
        username: values.username,
        name: values.name,
        email: values.email,
        password: values.password,
        createdProducts: accountState.accountDetail?.createdProducts ?? [],
        createdFormulas: accountState.accountDetail?.createdFormulas ?? [],
        approvedFormulas: accountState.accountDetail?.approvedFormulas ?? [],
      };
      const response = await dispatch(updateAccount(data));
      if (updateAccount.fulfilled.match(response)) {
        message.success("Cập nhật tài khoản thành công");
      }
      if (updateAccount.rejected.match(response)) {
        message.error("Cập nhật tài khoản thất bại");
      }
    }
  };

  return (
    <div className="wrapper account create-common">
      <div className="content has-footer">
        <Header title={isEdit ? "Chi tiết tài khoản" : "Tạo tài khoản"} />
        <Form
          form={form}
          initialValues={{ role: ["Người dùng"] }}
          layout="vertical"
          name="form-account"
          onFinish={isEdit ? handleUpdateAccount : handleCreateAccount}
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
          <Form.Item label="Cung cấp cho tài khoản này vai trò" name="role">
            <Checkbox.Group
              className="custom-checkbox-group"
              options={[
                { label: "Người dùng", value: "Người dùng", disabled: true },
                {
                  label: "Người phê duyệt mẫu thử/ đơn thành phẩm (dành cho QC)",
                  value: "Người phê duyệt mẫu thử/ đơn thành phẩm (dành cho QC)",
                },
                { label: "Người quản trị hệ thống", value: "Người quản trị hệ thống" },
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
              <Input placeholder="Nhập email" size="large" type="email" />
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
          {/* <Link to={paths.declareCustomer}> */}
          <Button
            className="btn-primary"
            form="form-account"
            htmlType="submit"
            loading={accountState.loading}
            size="large"
            type="primary"
          >
            {isEdit ? "Lưu" : "Tạo tài khoản"}
          </Button>
          {/* </Link> */}
        </Flex>
      </div>
    </div>
  );
};
