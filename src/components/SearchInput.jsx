// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import search from "public/icons/search.svg";
import Loader from "./Loader/Loader";
import { redirect, RedirectType } from "next/navigation";
// import useDebounce from "@/hooks/useDebouce";

const SearchInput = ({
  name,
  className,
  placeholder,
  initialValue,
  isLoading,
  ...props
}) => {
  // const router = useRouter();
  // const [searchTerm, setSearchTerm] = useState(initialValue || "");
  let searchTerm = initialValue || ""
  // const debouncedSearchTerm = useDebounce(searchTerm, 400);

  async function handleSearch(formData) {
    "use server";
    const searchQuery = formData.get("search");
    if (searchQuery) {
      redirect(`/?q=${searchQuery}`, RedirectType.replace);
    } else {
      redirect("/");
    }
  }

  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     handleSearch();
  //   }
  // };

  // useEffect(() => {
  //   if (debouncedSearchTerm === "") {
  //     router.push("?");
  //   } else {
  //     router.push(`?q=${debouncedSearchTerm}`);
  //   }
  // }, [debouncedSearchTerm, router]);

  return (
    <form action={handleSearch}
      className={`${
        className ?? ""
      } py-2.5 px-5 bg-[#2E2F3E] flex justify-start rounded-50`}
    >
      <button type="submit" className="text-white mr-2.5">
        {isLoading ? (
          <Loader />
        ) : (
          <img src={search.src} width={20} height={20} alt="search" />
        )}
      </button>
      <input
        type="text"
        className={`w-full bg-inherit text-white focus:outline-none text-lg leading-none`}
        placeholder={placeholder}
        name={name ?? "search"}
        // value={searchTerm}
        // onChange={handleChange}
        // onKeyDown={handleKeyDown}
        {...props}
      />
      {/* <button type="submit"></button> */}
    </form>
  );
};

export default SearchInput;
