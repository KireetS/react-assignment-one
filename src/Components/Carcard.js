import React from "react";
const Carcard = (props) => {
  const { make, model, image } = props;
  return (
    <>
      <div className="rounded-lg w-[22rem] h-[22rem] flex flex-col items-center justify-center bg-slate-800 p-5 mx-10 my-7">
        <img src={image} alt="" className="p-3" />
        <div className="flex items-center justify-center text-lg font-semibold text-white">
          {make} {model}
        </div>
      </div>
    </>
  );
};

export default Carcard;
