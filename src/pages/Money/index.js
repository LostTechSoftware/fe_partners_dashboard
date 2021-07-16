import React, { useState, useEffect } from "react";

import api from "../../services/api";
import MainMenu from "../../Components/MainMenu";
import PaymentMethod from "../../Components/PaymentMethod";

import "./styles.css";
import "./responsivity.css";

export default function Money() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get("/financial");
      setTransactions(response.data);
    }
    getTransactions();
  }, []);

  return (
    <div className="page money">
      <MainMenu currentPage="money" />
      <div className="pageContent">
        <header>
          <h1>Finanças</h1>
          <p>Olá, bem vindo de volta!</p>
        </header>

        <section className="balance">
          <section className="totalBalance">
            <span>Balanço nas últimas 24 horas</span>
            <h2>
              {(transactions.saleDay
                ? transactions.saleDay
                : 0
              ).toLocaleString("pt-br", { style: "currency", currency: "brl" })}
            </h2>
          </section>

          <section className="historic">
            <span className="date">Vendas das últimas 24 horas</span>
            <div className="underLine" />

            {transactions.order
              ? transactions.order.map((order) => (
                  <React.Fragment key={Math.random()}>
                    <div className="order" key={Math.random()}>
                      <div className="info">
                        <p>Pedido #{order.token}</p>
                        <PaymentMethod>{order.payment_method}</PaymentMethod>
                      </div>

                      <p className="price">
                        {order.realPrice.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "brl",
                        })}
                      </p>
                    </div>
                    <div className="underLine" />
                  </React.Fragment>
                ))
              : null}
          </section>
        </section>
      </div>
    </div>
  );
}
