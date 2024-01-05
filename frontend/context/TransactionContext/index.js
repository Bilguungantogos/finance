import React, { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "../UserProvider";
import { toast } from "react-toastify";
import myAxios from "@/utils/axios";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState({
    name: "buuz",
    amount: 10000,
    transaction_type: "EXP",
    description: "friend",
    category_id: "",
    updatedat: "",
  });
  const [getAllinex, setGetallinex] = useState(null);

  const changeTransactionData = (key, value) => {
    setTransactionData({ ...transactionData, [key]: value });
    // transactionData.amount <=> transactionData['amount'] <==> key="amount" transaction[key] : ''
  };

  const addTransaction = async () => {
    console.log("DATA", transactionData);
    console.log("USER", user);
    try {
      const { data } = await myAxios.post("/transactions", {
        ...transactionData,
        user_id: `b0fff3b0-cf44-4605-818e-d94e250d372f`,
      });
      console.log(data, "23232232323");
      toast.success("Гүйлгээг амжилттай нэмлээ.");
    } catch (error) {
      console.log(error, "ERROR");
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  const getAllIncomeExpense = async () => {
    try {
      const { data } = await myAxios.get(
        "/transactions/incomeandexpense/" +
          `b0fff3b0-cf44-4605-818e-d94e250d372f`
      );
      setGetallinex(data);
    } catch (error) {}
  };

  const [transactions, setTransactions] = useState([]);
  const getTransactions = async () => {
    try {
      const {
        data: { transactions },
      } = await myAxios.get(
        "/transactions/" + "b0fff3b0-cf44-4605-818e-d94e250d372f"
      );
      setTransactions(transactions);
    } catch (error) {}
  };

  useEffect(() => {
    getAllIncomeExpense();
    getTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactionData,
        changeTransactionData,
        addTransaction,
        setGetallinex,
        getAllinex,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
