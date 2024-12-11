import BreachCard from "@/modules/BreachCard";
import SearchInput from "@/components/SearchInput";
import Pagination from "@/modules/Pagination";
import BreachSummary from "@/modules/BreachSummary";

const Breaches = async ({ searchQuery }) => {
  const breachesData = [];
  const data = undefined;

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
            initialValue={searchQuery}
          />
        </div>
        <div className="mb-32 grid justify-items-center xl:grid-cols-2 grid-cols-1 gap-5 w-full">
          {breachesData.map((breach) => (
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
          ))}
        </div>
        <Pagination lengthData={data?.matches} />
      </div>
    </div>
  );
};

export default Breaches;
