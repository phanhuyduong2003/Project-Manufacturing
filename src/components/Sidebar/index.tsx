import { Flex, Layout, Menu, MenuProps } from "antd";
import { Link } from "react-router";

import { ChevronDownCircle, PaperPlane, PersonStar, SubTask } from "@/assets/icons";
import images from "@/assets/images";
import paths from "@/config/paths";

export const Sidebar = () => {
  const items: MenuProps["items"] = [
    {
      key: "product",
      label: <Link to={paths.product}>Danh sách sản phẩm</Link>,
      icon: <PaperPlane />,
    },
    {
      key: "declare",
      label: "Khai báo danh mục",
      icon: <SubTask />,
      children: [
        {
          key: "declare-material",
          label: <Link to={paths.home}>Khai báo nguyên vật liệu</Link>,
        },
        {
          key: "declare-category",
          label: <Link to={paths.home}>Khai báo danh mục sản phẩm</Link>,
        },
        {
          key: "declare-customer",
          label: <Link to={paths.home}>Khai báo khách hàng</Link>,
        },
      ],
    },
    {
      key: "account",
      label: <Link to={paths.home}>Quản lý tài khoản</Link>,
      icon: <PersonStar />,
    },
  ];

  return (
    <Layout.Sider className="sidebar-layout" width={"20%"}>
      <Flex gap={28} vertical>
        <Flex align="center" className="sidebar-info" justify="space-between">
          <Flex gap={6}>
            <div className="sidebar-info-avatar">
              <img alt="" src={images.avatar} />
            </div>
            <Flex vertical>
              <span className="sidebar-info-name">Nguyễn Hoàng Huy</span>
              <span className="sidebar-info-role">Quản trị viên</span>
            </Flex>
          </Flex>
          <Flex align="center" justify="center">
            <ChevronDownCircle size={20} />
          </Flex>
        </Flex>
        <Flex gap={4} vertical>
          <div className="sidebar-header">DANH SÁCH CHỨC NĂNG</div>
          <Menu
            className="sidebar-menu"
            items={items}
            selectable={false}
            selectedKeys={[window.location.pathname.split("/")[1] || ""]}
            triggerSubMenuAction="click"
          />
        </Flex>
      </Flex>
    </Layout.Sider>
  );
};
