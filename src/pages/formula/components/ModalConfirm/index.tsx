import { Button, Flex, Modal } from "antd";

import { Info } from "@/assets/icons";
import { ModalCommonProps } from "@/types/common";

export const ModalConfirm = ({ open, setOpen }: ModalCommonProps) => {
  return (
    <Modal
      centered
      classNames={{ wrapper: "confirm-modal", content: "confirm-content" }}
      closeIcon={null}
      destroyOnHidden
      footer={null}
      onCancel={() => setOpen(false)}
      open={open}
      width={360}
    >
      <Flex align="flex-start" gap={8} vertical>
        <Info color="#1a99f4" size={48} />
        <span className="confirm-title">Xác nhận xoá</span>
        <p className="confirm-text">Xác nhận xoá. Những thay đổi của bạn sẽ không thể khôi phục nữa.</p>
        <Flex className="confirm-action" gap={12}>
          <Button block color="default" onClick={() => setOpen(false)} size="large" variant="filled">
            Huỷ
          </Button>
          <Button block className="btn-primary" size="large" type="primary">
            Xác nhận
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};
