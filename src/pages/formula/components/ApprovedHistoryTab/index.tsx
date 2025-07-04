import { Flex } from "antd";

import { ArrowRedo, CheckmarkCircle, ChevronRight, PersonArrowRight, Ticket, XmarkCircle } from "@/assets/icons";
import { ApprovedHistoryTabProps } from "@/types/common";

export const ApprovedHistoryTab = ({ setOpenNote }: ApprovedHistoryTabProps) => {
  const approvedHistory = [
    {
      id: 1,
      name: "Hoangthanhnam",
      date: "08:00 09/01/2024",
      status: 0,
      statusText: "đã từ chối yêu cầu",
      note: "Công thức có độ chuẩn 90%",
    },
    {
      id: 2,
      name: "Linh Dang",
      date: "08:00 09/01/2024",
      status: 1,
      statusText: "đã phê duyệt yêu cầu",
      note: "Công thức có độ chuẩn 90%",
    },
    {
      id: 3,
      name: "QuangTV",
      date: "08:00 09/01/2024",
      status: 2,
      statusText: "đã chuyển phê duyệt",
      note: "",
    },
    {
      id: 4,
      name: "Hoangthanhnam",
      date: "08:00 09/01/2024",
      status: 3,
      statusText: "đã thu hồi phê duyệt",
      note: "Công thức có độ chuẩn 90%",
    },
    {
      id: 5,
      name: "Hoangthanhnam",
      date: "08:00 09/01/2024",
      status: 4,
      statusText: "đã tạo yêu cầu",
      note: "",
    },
  ];
  const historyIcon = [
    <XmarkCircle color="#e94040" size={20} />,
    <CheckmarkCircle color="#3ab67b" size={20} />,
    <PersonArrowRight color="#18202a" size={20} />,
    <ArrowRedo color="#18202a" size={20} />,
    <Ticket color="#18202a" size={20} />,
  ];

  return (
    <Flex className="history-approved" gap={4} vertical>
      <span className="history-approved-title">Lịch sử hoạt động</span>
      <Flex className="history-approved-list" vertical>
        {approvedHistory.map((item) => (
          <Flex className="history-approved-item" key={item.id} vertical>
            <Flex align="center" gap={16}>
              {historyIcon[item.status]}
              <Flex vertical>
                <div className="history-approved-item-title">
                  <span className="history-approved-item-name">{item.name}</span>
                  {` ${item.statusText}`}
                </div>
                <span className="history-approved-item-date">{item.date}</span>
              </Flex>
            </Flex>
            {item.note !== "" && (
              <Flex className="history-approved-item-note" gap={4} onClick={() => setOpenNote(true)}>
                Xem chi tiết <ChevronRight />
              </Flex>
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
