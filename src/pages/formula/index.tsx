import { Button, Flex, Tabs, TabsProps } from "antd";
import { useEffect, useState } from "react";

import { CheckCircle, Copy } from "@/assets/icons";
import { Header } from "@/components/Header";
import {
  ApprovedHistoryTab,
  FormulaDetailTab,
  ModalConfirm,
  ModalFormula,
  ModalMaterial,
  ModalNote,
} from "@/pages/formula/components";
import { useAppDispatch } from "@/redux/hooks";
import { getAccounts } from "@/redux/slices/accountSlice";
import { getMaterials } from "@/redux/slices/declareSlice";
import { getFormulaMaterials, getProducts } from "@/redux/slices/productSlice";

export const Formula = () => {
  const dispatch = useAppDispatch();
  const [currentTab, setCurrentTab] = useState<"detail" | "history">("detail");
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [openFormula, setOpenFormula] = useState<boolean>(false);
  const [openMaterial, setOpenMaterial] = useState<boolean>(false);
  const [openNote, setOpenNote] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getFormulaMaterials());
    dispatch(getMaterials());
    dispatch(getAccounts());
    dispatch(getProducts());
  }, [dispatch]);

  const formulaTabItems: TabsProps["items"] = [
    {
      key: "detail",
      label: "Chi tiết công thức",
      children: (
        <FormulaDetailTab
          setOpenConfirm={setOpenConfirm}
          setOpenFormula={setOpenFormula}
          setOpenMaterial={setOpenMaterial}
        />
      ),
      className: "formula-detail",
    },
    {
      key: "history",
      label: "Lịch sử phê duyệt",
      children: <ApprovedHistoryTab setOpenNote={setOpenNote} />,
      className: "formula-history",
    },
  ];

  return (
    <>
      <div className="wrapper formula create-common">
        <div className="content has-footer">
          <Header title="Tạo công thức" />
          <Tabs items={formulaTabItems} onChange={(key) => setCurrentTab(key as "detail" | "history")} />
        </div>
        {currentTab === "detail" && (
          <Flex className="formula-detail-footer create-common-footer" gap={12} justify="end">
            <Button
              color="green"
              icon={<CheckCircle size={20} viewBox="0 0 20 20" />}
              iconPosition="end"
              size="large"
              variant="filled"
            >
              Chuyển phê duyệt
            </Button>
            <Button className="btn-primary" size="large" type="primary">
              Lưu nháp
            </Button>
            <Button
              disabled
              icon={<Copy size={20} viewBox="0 0 20 20" />}
              iconPosition="end"
              size="large"
              variant="filled"
            >
              Tạo bản sao
            </Button>
            <Button color="default" size="large" variant="filled">
              Huỷ
            </Button>
          </Flex>
        )}
      </div>
      <ModalConfirm open={openConfirm} setOpen={setOpenConfirm} />
      <ModalFormula open={openFormula} setOpen={setOpenFormula} />
      <ModalMaterial open={openMaterial} setOpen={setOpenMaterial} />
      <ModalNote open={openNote} setOpen={setOpenNote} />
    </>
  );
};
