"use client";
import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const threshold = 300; // Thay đổi giá trị này nếu bạn muốn hiển thị nút ở một vị trí cuộn khác
    setIsVisible(scrollTop > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Chạy chỉ một lần khi component được mount

  return (
    <div
      style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        display: isVisible ? "block" : "none",
      }}
    >
      <BsFillArrowUpCircleFill
        className="back-to-top"
        onClick={scrollToTop}
      ></BsFillArrowUpCircleFill>
    </div>
  );
};

export default BackToTopButton;
