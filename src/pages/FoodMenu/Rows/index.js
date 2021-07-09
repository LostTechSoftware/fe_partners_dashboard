import React from "react";
import { Edit2, Pause, Play } from "react-feather";
import { LoadingSkeleton } from "../../../Components/LoadingSkeleton";
import { useScreenMeasure } from "../../../utils/isMobile";

import {
  RowsProduct,
  Title,
  RightComponent,
  ButtonEdit,
  ButtonPause,
  TitleButton,
} from "../styles";
import { useRows } from "./hooks";
import Product from "../Product";

function Rows({
  loading,
  row,
  setEditCategory,
  setAddProduct,
  setSelectedProduct,
  reload,
  setReload,
  setSelectedRow,
}) {
  const [rowBasicInfo, rowPaused, changeRowAvaliably, loadingAction, action] =
    useRows({
      row,
      setSelectedProduct,
      setAddProduct,
    });
  const [isMobile] = useScreenMeasure();

  return (
    <>
      <RowsProduct>
        {loading ? (
          <LoadingSkeleton
            isLoading={loading}
            hasHeading
            containerHeight="30px"
            containerWidth={isMobile ? "70%" : "33%"}
          >
            {rowBasicInfo.title}
          </LoadingSkeleton>
        ) : (
          <Title>{rowBasicInfo.title}</Title>
        )}
        <RightComponent>
          <ButtonEdit
            onClick={() => {
              setSelectedRow(row);
              setEditCategory(true);
            }}
          >
            <Edit2 />
            <TitleButton>
              {isMobile ? "Editar" : "Editar categoria"}
            </TitleButton>
          </ButtonEdit>

          <ButtonPause onClick={() => changeRowAvaliably(rowBasicInfo._id)}>
            {rowPaused ? (
              <>
                <Play />
                <TitleButton yellow>
                  {loadingAction
                    ? "Retomando"
                    : isMobile
                    ? "Retomar"
                    : "Retomar categoria"}
                </TitleButton>
              </>
            ) : (
              <>
                <Pause />
                <TitleButton yellow>
                  {loadingAction
                    ? "Pausando"
                    : isMobile
                    ? "Pausar"
                    : "Pausar categoria"}
                </TitleButton>
              </>
            )}
          </ButtonPause>
        </RightComponent>
      </RowsProduct>
      <Product
        reload={reload}
        setReload={setReload}
        rowId={row._id}
        action={action}
      />
    </>
  );
}

export default Rows;
