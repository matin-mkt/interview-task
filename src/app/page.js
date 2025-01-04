import BreachCard from "@/modules/BreachCard";
import SearchInput from "@/components/SearchInput";
import Pagination from "@/modules/Pagination";
import BreachSummary from "@/modules/BreachSummary";
// import { usePathname } from "next/navigation";
import { headers } from "next/headers";
import { Feed } from "@/components/feed";


const Breaches = async ( props ) => {

  const headerList = await headers();
  const pathname = headerList.get("x-current-path");
  let offset = 0
  let limit = 20

  const response = await fetch(`https://api.hackcheck.io/databreaches/list?offset=${offset}`)
  const data = await response.json()
  const breachesData = data.databreaches
  // const data = undefined;

  return (
    <div className="flex h-auto justify-center">
      <div className="pt-40 container flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center font-sunset">
          List of Data Breaches 
        </h1>
        <p className="text-xl text-center mt-6"></p>
        <div className="lg:w-[1038px] mt-12 mb-32">
          <SearchInput
            className={"max-w-full rounded-xl py-6 !text-lg"}
            placeholder={"Search"}
            // initialValue={searchQuery}
          />
        </div>
        <div className="mb-32 grid justify-items-center xl:grid-cols-2 grid-cols-1 gap-5 w-full">
          {/* {breachesData.map((breach) => (
            <BreachCard
              icon={
                breach.logo !== ""
                  ? breach.logo
                  : "/img/icons/default-breach-icon.svg"
              }
              description={breach.description}
              key={breach.name}
              title={breach.name}
              date={breach.date_breached}
              leaked={breach.compromised_fields}
            />
          ))} */}
          <Feed {...props} />
        </div>
            {/* <Pagination lengthData={data?.matches} /> */}
      </div>
    </div>
  );
};

export default Breaches;
