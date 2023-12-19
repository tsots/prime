import React from "react";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <a
        style={{ textDecoration: "none" }}
        href="https://www.bonema.co.za"
        target="_blank"
      >
        Bonema Engineering
      </a>{" "}
      &copy; {currentYear}
    </footer>
  );
};
