import { useEffect, useState } from "react";
import api from "../../../services/api";

export const usePaymentMethod = () => {
  const [creditCards, setCreditCards] = useState([
    { flag: "Mastercard", active: false },
    { flag: "Redeshop", active: false },
    { flag: "BNDES", active: false },
    { flag: "Sorocred", active: false },
    { flag: "Elo", active: false },
    { flag: "American Express", active: false },
    { flag: "Dinnersclub", active: false },
    { flag: "Aura", active: false },
    { flag: "Hipercard", active: false },
    { flag: "VISA", active: false },
  ]);
  const [debitCards, setDebitCards] = useState([
    { flag: "Mastercard/Maestro", active: false },
    { flag: "Redeshop", active: false },
    { flag: "Elo", active: false },
    { flag: "VISA Electron", active: false },
  ]);
  const [online, setOnline] = useState(false);

  async function GetPayments() {
    const { data } = await api.get("/partner/payments");

    if (data) {
      setCreditCards(data.creditCards);
      setDebitCards(data.debitCards);
      setOnline(data.online);
    }
  }

  useEffect(() => {
    GetPayments();
  }, []);

  async function UpdateOrCreatePayment(index, credit, debit) {
    const newArr1 = creditCards;
    const newArr2 = debitCards;

    if (credit) {
      newArr1[index].active = !newArr1[index].active;
    }
    if (debit) {
      newArr2[index].active = !newArr2[index].active;
    }

    await api.post("/partner/payments", {
      creditCards: newArr1,
      debitCards: newArr2,
      online: !online,
    });
  }

  return [creditCards, debitCards, online, UpdateOrCreatePayment, setOnline];
};
