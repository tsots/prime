import Link from "next/link";

const DesktopHeader = () => {
  return (
    <header className="desktop-header">
      <nav>
        <div className="logo">
          <a href="/">
            {" "}
            <img src="/Logo.svg" alt="" />
          </a>
        </div>
        <div className="menu">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default DesktopHeader;
