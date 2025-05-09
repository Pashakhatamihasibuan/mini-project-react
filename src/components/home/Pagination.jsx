const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="mt-8 flex justify-between items-center">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={`px-4 py-2 rounded-md ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"} text-white`}
      >
        Previous
      </button>
      <span className="text-gray-700">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className={`px-4 py-2 rounded-md ${page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"} text-white`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
