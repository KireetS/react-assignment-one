import { useState } from "react";
import "./App.css";
import Carlist from "./Components/Carlist";
import Navbar from "./Components/Navbar";
// import { Route, Routes } from "react-router-dom";
import cars from "./car";
import Pagination from "./Components/Pagination";
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage, setPostperpage] = useState(6);
  return (
    <>
      <Navbar />
      <Carlist
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        postperpage={postperpage}
        setPostperpage={setPostperpage}
      />
      <Pagination
        totalpost={cars.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        postsperpage={6}
      />
    </>
  );
}

export default App;
