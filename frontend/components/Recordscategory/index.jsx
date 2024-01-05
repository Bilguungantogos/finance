import React, { useContext } from "react";
import Category from "./Category";
import ExpenseForm from "../ExpenseForm";
import { useState } from "react";

const Recordscategory = () => {
  const categoryNames = [
    { names: "Food & Drinks" },
    { names: "Shopping" },
    { names: "Housing" },
    { names: "Transportation" },
    { names: "Vehicle" },
    { names: "Life & Entertainment" },
    { names: "Communication, PC" },
    { names: "Financial expenses" },
    { names: "Investments" },
    { names: "Income" },
    { names: "Others" },
  ];
  const [open, setOpen] = useState(false);
  const closeForm = () => {
    setOpen(false);
  };
  return (
    <div className="w-[282px] flex flex-col gap-6 bg-white py-6 px-4 rounded-lg">
      <h3 className="text-2xl">Records</h3>
      <button
        className="btn btn-primary w-full h-[32px] rounded-full"
        onClick={() => {
          setOpen(true);
        }}
      >
        Add
      </button>
      <input
        type="text"
        placeholder="Search"
        className="input w-full max-w-xs"
      />
      <div className="flex flex-col">
        <p className="mb-4">Types</p>
        <div className="form-control">
          <label className="cursor-pointer label flex justify-start gap-4">
            <input type="checkbox" className="checkbox checkbox-info w-4 h-4" />
            <span className="label-text">All</span>
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label flex justify-start gap-4">
            <input type="checkbox" className="checkbox checkbox-info w-4 h-4" />
            <span className="label-text">Income</span>
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label flex justify-start gap-4">
            <input type="checkbox" className="checkbox checkbox-info w-4 h-4" />
            <span className="label-text">Expense</span>
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="font-bold">Category</p>
          <button className="btn btn-default text-[gray] w-[61px] h-[24px] ">
            Clear
          </button>
        </div>
        {categoryNames.map((data) => {
          return <Category data={data} />;
        })}
        <div className="flex gap-2">
          <img src="./blueplus.svg" className=""></img>
          <p>Add Category</p>
        </div>
      </div>
      <div>
        <p className="font-bold mb-4">Amount Range</p>
        <div className="flex gap-4 ">
          <input
            type="text"
            placeholder="0"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="1000"
            className="input input-bordered w-full "
          />
        </div>
        <div className="mt-4">
          <input type="range" min={0} max="100" className="range px-2" />
          <div className="flex justify-between">
            <p>0</p>
            <p>1000</p>
          </div>
        </div>
      </div>
      {<ExpenseForm open={open} closeForm={closeForm} />}
    </div>
  );
};

export default Recordscategory;
