"use client";
import React, { useRef } from "react";
import Link from "next/link";

const MobileHeader = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("active");
  };
  return (
    <header className="mobile-header">
      <nav>
        <div className="logo">
          <a href="/">
            <img src="/Logo.svg" alt="" />
          </a>
        </div>
        <div ref={navRef} className="menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div onClick={showNavbar} className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default MobileHeader;
