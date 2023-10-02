import React from "react";
import { Link } from "react-router-dom";
const Pagination = (props) => {
  const { totalpost, postsperpage, currentPage, setCurrentPage } = props;
  const pages = [];
  for (let i = 1; i <= Math.min(10, Math.ceil(totalpost / postsperpage)); i++) {
    pages.push(i);
  }
  const previousPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage =
    currentPage < Math.min(10, pages.length) ? currentPage + 1 : pages.length;
  return (
    <>
      <div className="bg-slate-700 h-14 w-full flex items-center justify-center  py-28">
        <div>
          <Link to={`page/${previousPage}`}>
            <button
              className="rounded-md  p-3  disabled:bg-slate-600 bg-slate-800 text-white font-semibold mx-3 my-4"
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
              disabled={currentPage === 1 ? true : false}
            >
              Previous
            </button>
          </Link>
        </div>

        {pages.map((page, index) => (
          <div key={index}>
            <Link to={`page/${page}`}>
              <button
                className={`rounded-md w-9 p-3 bg-slate-800 text-white font-semibold mx-3 my-4  ${
                  currentPage === page ? "bg-gray-500" : ""
                }`}
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {page}
              </button>
            </Link>
          </div>
        ))}
        <div>
          <Link to={`page/${nextPage}`}>
            <button
              className="rounded-md disabled:bg-slate-600 p-3 bg-slate-800 text-white font-semibold mx-3 my-4"
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pagination;
