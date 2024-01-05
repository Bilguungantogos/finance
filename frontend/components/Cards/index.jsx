import React, { useContext } from "react";
import Incomecomp from "./Incomecomp";
import Expensescomp from "./Expensescomp";
import Debitcard from "./Debitcard";
import { TransactionContext } from "@/context/TransactionContext";

const Cards = () => {
  const { getAllinex } = useContext(TransactionContext);

  return (
    <div className="flex gap-6 justify-center">
      <Debitcard />
      <Incomecomp income={getAllinex?.totalIncome} />
      <Expensescomp expense={getAllinex?.totalExpense} />
    </div>
  );
};

export default Cards;
