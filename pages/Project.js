import Link from "next/link";
import globals from "../styles/globals.module.css";

export default function Project({ website, code, imgsrc }) {
  return (
    <div className={globals.project}>
      <img className={globals.img} src={imgsrc} alt={imgsrc[0]} />
      <Link href={"/" + website}></Link>

      <Link href={"/" + code}>
        <span>veiw code</span>
      </Link>
    </div>
  );
}
