import style from "./Table.module.css";
import NextPrevButton from "./NextPrevButton";

const PaginationTemplate = ({
  value,
  selectOnChange,
  pageNumberButtons,
  disabledPrevious,
  disabledNext,
  handleNext,
  handlePrevious,
  lengthData,
  offset,
  endIndex,
}) => {
  return (
    <div className="md:pt-5 pb-8 flex flex-col-reverse gap-4 md:gap-0 md:flex-row-reverse items-center w-full justify-between text-[#B9B9B9] text-xs">
      <div className="flex gap-2 font-medium text-primaryGray items-center justify-center text-base">
        <NextPrevButton
          disabled={disabledPrevious}
          handleClick={handlePrevious}
        >
          {"<"}
        </NextPrevButton>
        {pageNumberButtons()}
        <NextPrevButton disabled={disabledNext} handleClick={handleNext}>
          {">"}
        </NextPrevButton>
      </div>
      <div className="flex items-center justify-center w-[70%] md:w-fit pl-px">
        <select
          value={value}
          onChange={selectOnChange}
          className={`w-full ${style.select}`}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize} items
            </option>
          ))}
        </select>
        {lengthData && (
          <span className="pl-3 w-full whitespace-nowrap hidden lg:block font-medium text-white/30">{`Showing ${
            parseInt(offset) + 1
          } to ${parseInt(endIndex)} of  ${lengthData} results`}</span>
        )}
      </div>
    </div>
  );
};

export default PaginationTemplate;
