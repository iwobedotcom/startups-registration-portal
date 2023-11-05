"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// import Footer from "";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      {children}

      {/* <Footer /> */}
    </>
  );
};

export default DefaultLayout;