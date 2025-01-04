"use client"
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import ArrowIcon from "public/icons/arrow.svg";
import Image from "next/image";

const BreachCard = ({title, date, fields, leaked, description, icon}) => {
 
  // const {title, date, fields, leaked, description, icon} = props
  const router = useRouter();
  const handleClick = () => {
    router.push();
  };

  const scrollContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { left, width } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    const scrollSpeedFactor = 0.7;
    const scrollAmount =
      (mouseX / width) * container.scrollWidth * scrollSpeedFactor - width / 2;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const formatTitle = (title) => {
    const newTitle = title
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
    return newTitle;
  };

  return (
    <a
      className="w-full bg-cardBlue flex flex-col justify-between p-6 rounded-xl col-span-2 lg:col-span-1 max-w-[615px] min-h-[267px] text-white cursor-pointer"
      href={`/breaches/${title}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-[70px] h-[70px] relative overflow-hidden">
            <img src={icon} alt={""} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-medium text-ellipsis max-w-64 overflow-hidden">
              {formatTitle(title)}
            </h2>
            <p className="text-15 leading-7">
              <span className="font-semibold text-[#BABABF]">Breach Date:</span>{" "}
              {!!date ? date : "N/A"}
            </p>
          </div>
        </div>
        {/* <ArrowIcon className="-rotate-45 ml-auto" /> */}
        <Image alt={title} src={ArrowIcon} />
      </div>
      <p className="text-textGray leading-5 text-sm">{description}</p>

      <div
        className="flex w-full gap-2.5 items-center overflow-x-auto no-scrollbar"
        ref={scrollContainerRef}
        onMouseMove={handleMouseMove}
      >
        {leaked.map((item, index) => (
          <div
            key={index}
            className="bg-primaryBlue rounded-50 px-3 py-1 whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </a>
  );
};

export default BreachCard;
