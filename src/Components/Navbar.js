import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-slate-800 h-14 w-full items-center justify-between">
        <div className="p-3 flex items-center justify-center">
          <div className="box-border p-3">
            <input
              type="text"
              className="flex items-center justify-center p-3 rounded-lg focus:outline-none text-white bg-slate-600 h-10 w-[30rem] mx-9"
              placeholder="Search"
            />
          </div>
          <div className="text-white p-3 font-semibold text-lg mx-9">
            Relevance
          </div>
          <div className="text-white p-3 font-semibold text-lg mx-9">
            All Brands
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
