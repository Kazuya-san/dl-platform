"use client";
import Lottie from "lottie-react";
import animationData from "../../../../public/logo.json";
export default function Custom404() {
  return (
    <div className="h-screen w-screen">
      <Lottie
        animationData={animationData}
        className="w=full h-full"
        loop={true}
      />
    </div>
  );
}
