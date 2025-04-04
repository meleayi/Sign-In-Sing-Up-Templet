"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCountNumber = ({ amount }: { amount: number }) => {
  return (
    <CountUp
      end={amount}
      start={0}
      prefix="Total of ET "
      suffix=" Birr"
      duration={1.5}
      separator=" "
    />
  );
};

export default AnimatedCountNumber;
