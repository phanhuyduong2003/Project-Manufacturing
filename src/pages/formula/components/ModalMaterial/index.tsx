import { Button, Checkbox, Flex, Input, List, Modal } from "antd";
import { useState } from "react";

import { Close, Listing, Search } from "@/assets/icons";
import { useAppSelector } from "@/redux/hooks";
import { ModalCommonProps } from "@/types/common";

export const ModalMaterial = ({ open, setOpen }: ModalCommonProps) => {
  const declareState = useAppSelector((state) => state.declare);
  const [materialSelected, setMaterialSelected] = useState<string[]>([]);

  const dataMaterialList = declareState.materials.map((material) => material.name);

  return (
    <Modal
      centered
      classNames={{
        wrapper: "material-modal",
        header: "material-header modal-header",
        content: "material-content",
        body: "material-body",
        footer: "material-footer",
      }}
      footer={
        <Flex gap={12} justify="end">
          <Button color="default" onClick={() => setOpen(false)} size="large" variant="filled">
            Huỷ
          </Button>
          <Button
            className="btn-primary"
            onClick={() => {
              setOpen(false);
              setMaterialSelected([]);
            }}
            size="large"
            type="primary"
          >
            Xong
          </Button>
        </Flex>
      }
      onCancel={() => setOpen(false)}
      open={open}
      title="Danh sách nguyên vật liệu"
      width={880}
    >
      <Flex>
        <Flex style={{ flex: 0.7 }} vertical>
          <div className="material-search">
            <Input placeholder="Tìm kiếm nguyên liệu" prefix={<Search viewBox="0 0 28 28" />} size="large" />
          </div>
          <List
            className="material-list"
            dataSource={dataMaterialList}
            renderItem={(item: string) => (
              <List.Item
                className="material-item"
                key={item}
                onClick={() => {
                  if (materialSelected.includes(item)) {
                    setMaterialSelected(materialSelected.filter((i) => i !== item));
                  } else {
                    setMaterialSelected([...materialSelected, item]);
                  }
                }}
              >
                <Flex align="center" gap={12}>
                  <Listing />
                  <span className="material-item-name" style={{ flex: 1 }}>
                    {item}
                  </span>
                  <Checkbox
                    checked={materialSelected.includes(item)}
                    onClick={() => {
                      if (materialSelected.includes(item)) {
                        setMaterialSelected(materialSelected.filter((i) => i !== item));
                      } else {
                        setMaterialSelected([...materialSelected, item]);
                      }
                    }}
                  />
                </Flex>
              </List.Item>
            )}
          />
        </Flex>
        <Flex className="material-selected" gap={16} style={{ flex: 0.3 }} vertical>
          <span className="material-selected-title">Danh sách đã chọn</span>
          <List
            className="material-selected-list"
            dataSource={materialSelected}
            renderItem={(item: string) => (
              <List.Item className="material-selected-item" key={item}>
                <Flex align="center" gap={12}>
                  <Listing />
                  <span className="material-selected-item-name" style={{ flex: 1 }}>
                    {item}
                  </span>
                  <Close
                    cursor="pointer"
                    onClick={() => {
                      setMaterialSelected(materialSelected.filter((i) => i !== item));
                    }}
                  />
                </Flex>
              </List.Item>
            )}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};
