import React, { useEffect, useState } from "react";
import {
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@material-ui/core";

import { EditRounded } from "@material-ui/icons";

import api from "../../../services/api";
import SellingStateControllerButton from "./SellingStateControllerButton";
import UpdateItem from "./UpdateItem";
import "./styles.css";

export default function ItensTable({ title, id, products = [], paused }) {
  const deviceWidth = window.innerWidth;
  const [productsRow, setProductsRow] = useState(products);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [currentEditingProduct, setCurrentEditingProduct] = useState("");
  const [loading, setLoading] = useState(false);

  function defineProductToUpdate({ _id, title, price, description, avatar }) {
    setCurrentEditingProduct({
      _id,
      title,
      price,
      description,
      avatar,
    });
    setOpenUpdateModal(true);
  }

  function updateProductOnTable({ productId, newTitle, newPrice }) {
    const productIndex = productsRow.findIndex((e) => e._id === productId);
    let tempProductsRow = productsRow;
    let tempProductObject = productsRow[productIndex];

    tempProductObject.title = newTitle;
    tempProductObject.price = newPrice;
    tempProductsRow[productIndex] = tempProductObject;

    setProductsRow(tempProductsRow);
  }

  function removeProductFromTable(productId) {
    const productIndex = productsRow.findIndex((e) => e._id === productId);
    let tempProductsRow = productsRow;
    tempProductsRow.splice(productIndex, 1);

    console.log(tempProductsRow);
    setProductsRow(tempProductsRow);
    return 0;
  }

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        if (id === 1) {
          setLoading(false);
          return setProductsRow(products);
        }

        const response = await api.get(`/row/get/${id}`);

        setProductsRow(response.data.products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    getProducts();
  }, [id]);

  useEffect(() => {
    if (id === 1) return setProductsRow(products);
  }, [products]);

  return (
    <>
      <TableContainer className="itensTable" component={Paper}>
        <header className="productsRowHeader">
          <h2> {title} </h2>
          {id !== 1 && (
            <SellingStateControllerButton sellingState={paused} rowId={id} />
          )}
        </header>

        <Table aria-label="simple table">
          <TableBody>
            {!!loading === false &&
              !!productsRow.length &&
              productsRow.map((product) => (
                <React.Fragment key={Math.random()}>
                  <TableRow key={product._id}>
                    <TableCell className="itemTitle" component="th" scope="row">
                      <Button onClick={() => defineProductToUpdate(product)}>
                        <EditRounded />
                        <p> {product.title} </p>
                      </Button>
                    </TableCell>

                    <TableCell align="right">
                      <p className="price">
                        {product.price.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "brl",
                        })}
                      </p>
                    </TableCell>

                    {deviceWidth > 600 ? (
                      <TableCell align="right" className="">
                        <SellingStateControllerButton
                          sellingState={product.paused}
                          productId={product._id}
                        />
                      </TableCell>
                    ) : null}
                  </TableRow>

                  {deviceWidth <= 600 ? (
                    <TableRow className="sellingStateRow">
                      <SellingStateControllerButton
                        sellingState={product.paused}
                        productId={product._id}
                      />
                    </TableRow>
                  ) : null}
                </React.Fragment>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <UpdateItem
        product={currentEditingProduct}
        openModal={openUpdateModal}
        closeModal={() => setOpenUpdateModal(false)}
        updateProductOnTable={updateProductOnTable}
        removeProductFromTable={removeProductFromTable}
      />
    </>
  );
}
