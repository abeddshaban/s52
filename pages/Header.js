import globals from "../styles/globals.module.css";

export default function Header() {
  return (
    <>
      <header className={globals.header}>
        <span className={globals.header_span}>Abed Al Ghani</span>
        <div className={globals.header_navigation_div}>
          <button className={globals.header_btn}>Home</button>
          <button className={globals.header_btn}>Projects</button>
          <button className={globals.header_btn}>About</button>
        </div>
      </header>
    </>
  );
}
