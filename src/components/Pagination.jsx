import React, { useEffect, useState } from "react";

const Pagination = ({ filteredData, setDisplayedData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const numPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    setDisplayedData(filteredData.slice(startIndex, endIndex));
  }, [currentPage, filteredData]);

  function handlePageClick(page) {
    setCurrentPage(page);
  }

  return (
    <div className="pagination-btns">
      {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`pagination-btn ${currentPage === page ? "active" : ""}`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
