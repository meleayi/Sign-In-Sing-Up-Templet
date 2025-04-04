import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import AnimatedCountNumber from "./AnimatedCountNumber";
import LoginUserDoughnutChart from "./LoginUserDoughnutChart";

const HeaderCard = () => {
  return (
    <div className="flex w-full items-center md:gap-2 xl:gap-4 flex-col md:flex-row rounded-xl border border-gray-200  shadow-chart sm:gap-6  mt-4 max-w-[780px]">
      <div className="p-4 items-center text-justify">
        <LoginUserDoughnutChart />
      </div>
      <div className="flex gap-2 p-2 flex-col ">
        <div className="text-loginGradient ">Sample Text</div>
        <span>let me some thing </span>

        <div className="text-loginGradient font-bold">
          <AnimatedCountNumber amount={10200} />
        </div>
        <span className="text-sm text-gray-400">Sample number counting</span>
      </div>
      <div>
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          alt="sample image"
        />
      </div>
    </div>
  );
};

export default HeaderCard;
