
"use client";
const NextPrevButton = ({children, disabled, handleClick}) => {
  return (
    <button
      className=" hover:bg-primaryBlue/10 px-3 py-2 rounded-lg disabled:cursor-not-allowed disabled:bg-transparent"
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default NextPrevButton;
