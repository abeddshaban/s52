import globals from "../styles/globals.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className={globals.header}>
        <span className={globals.header_span}>Abed Al Ghani</span>
        <div className={globals.header_navigation_div}>
          <Link href="/">
            <button className={globals.header_btn}>Home</button>
          </Link>
          <Link href="/projects">
            <button className={globals.header_btn}>Projects</button>
          </Link>
          <Link href="/about">
            <button className={globals.header_btn}>About</button>
          </Link>
        </div>
      </header>
    </>
  );
}
