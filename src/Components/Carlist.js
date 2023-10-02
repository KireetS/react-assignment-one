import React from "react";
import Carcard from "./Carcard";
// import { useState } from "react";
import cars from "../car";
const Carlist = (props) => {
  const { currentPage } = props;
  const { postperpage } = props;

  const lastind = currentPage * postperpage;
  const first = lastind - postperpage;
  const posts = cars.slice(first, lastind);
  return (
    <>
      <div className="min-h-screen w-full bg-slate-700 flex flex-grow">
        <div className="flex flex-wrap bg-slate-700 items-center p-20">
          {posts.map((car) => (
            <div key={car.id}>
              <Carcard make={car.make} model={car.model} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carlist;