import React from "react";

const Pagination = (props) => {
  const { totalpost, postsperpage, currentPage, setCurrentPage } = props;
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalpost / postsperpage); i++) {
    pages.push(i);
  }
  return (
    <>
      <div className="bg-slate-700 h-14 w-full flex items-center justify-center  py-28">
        <div>
          <button
            className="rounded-md  p-3  disabled:bg-slate-600 bg-slate-800 text-white font-semibold mx-3 my-4"
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
            disabled={currentPage === 1 ? true : false}
          >
            Previous
          </button>
        </div>
        {pages.map((page, index) => (
          <div key={index}>
            <button
              className={`rounded-md w-9 p-3 bg-slate-800 text-white font-semibold mx-3 my-4  ${
                currentPage === page ? "bg-slate-400" : ""
              }`}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          </div>
        ))}
        <div>
          <button
            className="rounded-md disabled:bg-slate-600 p-3 bg-slate-800 text-white font-semibold mx-3 my-4"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
