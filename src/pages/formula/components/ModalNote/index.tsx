import { Divider, Flex, Modal } from "antd";

import { ModalCommonProps } from "@/types/common";

export const ModalNote = ({ open, setOpen }: ModalCommonProps) => {
  return (
    <Modal
      centered
      classNames={{ wrapper: "note-modal", content: "note-content", body: "note-body" }}
      closeIcon={null}
      footer={null}
      onCancel={() => setOpen(false)}
      open={open}
    >
      <Flex vertical>
        <Flex gap={4} vertical>
          <span className="note-title">Phê duyệt công thức</span>
          <span>Rose Nguyen • 12:43 09/01/2024</span>
        </Flex>
        <Divider />
        <Flex gap={8} vertical>
          <span className="note-title">Ghi chú</span>
          <p>Công thức có độ chuẩn 90%</p>
        </Flex>
      </Flex>
    </Modal>
  );
};
