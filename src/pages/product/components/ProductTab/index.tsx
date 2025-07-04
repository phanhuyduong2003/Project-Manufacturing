import { Flex, Form, Input, Radio, Select } from "antd";

import { ProductTabProps } from "@/types/common";

export const ProductTab = ({ form, declareState }: ProductTabProps) => {
  return (
    <>
      <Form.Item label="Trạng thái sản phẩm" name="status" rules={[{ required: true }]}>
        <Radio.Group
          options={[
            { value: 1, label: "Áp dụng" },
            { value: 2, label: "Không áp dụng" },
          ]}
        />
      </Form.Item>
      <Flex gap={10}>
        <Form.Item label="Mã sản phẩm" name="code" rules={[{ required: true }]} style={{ flex: 1 }}>
          <Input size="large" />
        </Form.Item>
        <Form.Item label="Ngày tạo" name="createdAt">
          <Input disabled size="large" />
        </Form.Item>
        <Form.Item label="Người tạo" name="createdBy">
          <Input disabled size="large" />
        </Form.Item>
      </Flex>
      <Form.Item label="Tên sản phẩm" name="name">
        <Input placeholder="Nhập tên, mô tả sản phẩm" size="large" />
      </Form.Item>
      <Flex gap={10}>
        <Form.Item label="Loại sản phẩm" name="typeId" style={{ flex: 0.5 }}>
          <Select
            onSelect={(value) =>
              form.setFieldValue(
                "quantity",
                declareState.categories.find((item) => item.id === value)?.products.length || 0,
              )
            }
            options={declareState.categories.map((item) => ({ label: item.name, value: item.id }))}
            placeholder="Chọn loại sản phẩm"
            size="large"
          />
        </Form.Item>
        <Form.Item label="Số sản phẩm đã duyệt" name="quantity" style={{ flex: 1 }}>
          <Input disabled size="large" />
        </Form.Item>
      </Flex>
    </>
  );
};
