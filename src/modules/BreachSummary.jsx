import React from "react";
import Image from "next/image";

const SUMMARY_DATA = [
  {
    icon: "/img/icons/breach-summary-database.svg",
    value: "1,584,548",
    title: "Total Databases",
  },
  {
    icon: "/img/icons/breach-summary-star.svg",
    value: "shanghi 1 billion data",
    title: "Biggest Database",
  },
  {
    icon: "/img/icons/breach-summary-fire.svg",
    value: "Alipay 600M Scrape",
    title: "Latest Database",
  },
];

const BreachSummary = () => {
  const cards = SUMMARY_DATA.map((breach, index) => {
    return (
      <>
        <BreachSummaryCard
          icon={breach.icon}
          value={breach.value}
          title={breach.title}
        />
        {index < 2 && <div className="w-px h-[50px] bg-[#28467C]" />}
      </>
    );
  });

  return (
    <div className="w-full h-auto flex items-center justify-around mt-[110px] mb-[66px] lg:flex-row flex-col lg:gap-0 gap-6">
      {cards}
    </div>
  );
};

export default BreachSummary;

const BreachSummaryCard = ({ icon, value, title }) => {
  return (
    <div className="w-fit h-auto flex flex-col items-center">
      <img src={icon} alt={""} className="w-10 h-10" />
      <p className="text-primaryBlue text-[32px] font-semibold lg:my-6 my-2">
        {value}
      </p>
      <p className="text-white text-[15px]">{title}</p>
    </div>
  );
};
