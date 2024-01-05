import React from "react";

const Expensescomp = ({ expense }) => {
  return (
    <div className="w-[384px] rounded-[10px] bg-white">
      <div className="flex h-8 px-6 py-6 items-center gap-2 border-b-[1px]">
        <img src="./dots/bluedot.svg" className="w-2 h-2"></img>
        <p>Total Expenses</p>
      </div>
      <div className="px-6 pt-5 pb-6">
        <h2 className="font-bold text-4xl">
          {expense > 0 && (
            <span className="font-bold lg:text-4xl md:text-2xl text-xl text-red-400">
              -{expense}₮
            </span>
          )}
          {!expense && <div className="skeleton h-9 w-full"></div>}
        </h2>
        <p className="text-[#64748B] text-lg">Your Income Amount</p>
        <div className="flex mt-4 gap-2">
          <img src="./arrowcircles/arrowcircledown.svg"></img>
          <p className="text-lg">32% from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Expensescomp;
