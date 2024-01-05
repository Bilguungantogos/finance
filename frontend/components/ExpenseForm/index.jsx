import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Addcategory from "../Recordscategory/addcategory";
import { UserContext } from "@/context/UserProvider";
import CategoryForm from "../addCategoryForm";
import { TransactionContext } from "@/context/TransactionContext";
import myAxios from "@/utils/axios";
import RecordIcons from "./RecordIcons";

const ExpenseForm = ({ open, closeForm }) => {
  const [open1, setOpen1] = useState(false);
  const [category, setCategory] = useState([]);
  const {
    transactionData,
    changeTransactionData,
    addTransaction,
    getAlltransaction,
  } = useContext(TransactionContext);
  const { user } = useContext(UserContext);
  const closeForm1 = () => {
    setOpen1(false);
  };

  const categorydropdown = [
    { iconsrc: "/categoryicons/house.svg", catname: "Home" },
    { iconsrc: "/categoryicons/gift.svg", catname: "Gift" },
    { iconsrc: "/categoryicons/food.svg", catname: "Food" },
    { iconsrc: "/categoryicons/drink.svg", catname: "Drink" },
    { iconsrc: "/categoryicons/taxi.svg", catname: "Taxi" },
    { iconsrc: "/categoryicons/shopping.svg", catname: "Shopping" },
  ];

  const addRecord = async () => {
    await addTransaction();
    console.log("CLOSE");
    closeForm();
  };

  const getCategories = async () => {
    const {
      data: { categories },
    } = await myAxios.get("/categories");
    console.log("RES", categories);
    setCategory(categories);
    console.log(user);
  };

  return (
    <div className="modal bg-[#3636369a] w-full h-full" open={open}>
      <div className=" p-0 m-0 w-[800px] bg-white">
        <div className="flex justify-between border-b-[1px] px-6 py-5 ">
          <h4>Add Record</h4>
          <button onClick={closeForm}>X</button>
        </div>
        <div className="flex">
          <div className="py-4 px-6 w-[50%]">
            <div className="flex mb-4">
              {
                <>
                  <button
                    className={`flex-1 btn-md rounded-3xl border-none  ${
                      transactionData.transaction_type === "EXP" &&
                      "bg-[#0166FF] text-white"
                    }`}
                    onClick={() => {
                      changeTransactionData("transaction_type", "EXP");
                    }}
                  >
                    Expense
                  </button>
                  <button
                    className={`flex-1 btn-md rounded-3xl border-none ${
                      transactionData.transaction_type === "INC" &&
                      "bg-[#228822] text-white"
                    }`}
                    onClick={() => {
                      changeTransactionData("transaction_type", "INC");
                    }}
                  >
                    Income
                  </button>
                </>
              }
            </div>
            <div className="flex flex-col">
              <div className="form-control w-full">
                <div className="border rounded-lg bg-[#e8e8e8] py-2 px-4">
                  <label className="label m-0 p-0">
                    <span className="label-text">Amount</span>
                  </label>
                  <input
                    type="text"
                    placeholder="₮ 000.00"
                    className="input input-bordered-none bg-[#e8e8e8] m-0 p-0 w-full h-7"
                    value={transactionData.amount}
                    name="amount"
                    onChange={(e) => {
                      console.log(e.target.name, e.target.value);
                      changeTransactionData(e.target.name, e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mt-[19px]">
                <div className="label-text">Category</div>
                <details className="dropdown w-full">
                  <summary className="m-1 btn w-full flex justify-between text-[#94A3B8] font-normal">
                    Find or choose category
                    <span>
                      <img src="/dropdownarrow.svg"></img>
                    </span>
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
                    <li>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen1(true);
                        }}
                      >
                        <img src="/categoryicons/plus.svg"></img>Add category
                      </button>
                    </li>
                    <RecordIcons
                      changeTransactionData={changeTransactionData}
                      category={category}
                    />
                  </ul>
                </details>
              </div>
              <div className="flex gap-2">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="datetime-local"
                    placeholder="Oct 30,2023"
                    className="w-full input input-bordered bg-[#F9FAFB]"
                    name="updatedat"
                    onChange={(e) => {
                      console.log("first", e.target.value);
                      changeTransactionData(e.target.name, e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            {
              <button
                onClick={addRecord}
                className={`px-2 py-3 modal-backdrop w-full font-normal my-4 text-white rounded-full hover:cursor-pointer hover:opacity-70 ${
                  transactionData.transaction_type === "INC"
                    ? "bg-[#228822]"
                    : "bg-[#0166FF]"
                }`}
              >
                Add Record
              </button>
            }
          </div>
          <div className="py-4 px-6 w-[50%] ">
            <input
              type="text"
              placeholder="Name"
              className="w-full input input-bordered bg-[#F9FAFB]"
              name="name"
              onChange={(e) => {
                changeTransactionData(e.target.name, e.target.value);
              }}
            />
            <label className="label mt-[19px]">
              <span className="label-text ">Note</span>
            </label>
            <textarea
              type="text"
              placeholder="Type here"
              className="input w-full h-[50%] p-4 bg-[#e8e8e8]"
              name="description"
              onChange={(e) => {
                changeTransactionData(e.target.name, e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {open1 && <CategoryForm open1={open1} closeForm1={closeForm1} />}
    </div>
  );
};

export default ExpenseForm;
