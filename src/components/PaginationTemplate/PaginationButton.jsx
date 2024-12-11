const PaginationButton = ({ onClick, disabled, index, currentPage }) => {
  return (
    <button
      className={`lg:px-3 px-1.5 lg:py-2 py-1 rounded-lg disabled:cursor-not-allowed
          ${
            index === currentPage
              ? " bg-primaryBlue text-white"
              : "hover:bg-primaryBlue/10"
          }
        `}
      disabled={disabled}
      onClick={onClick}
    >
      {index}
    </button>
  );
};

export default PaginationButton;
