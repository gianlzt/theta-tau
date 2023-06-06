// import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className={"basicNav"}>
        <Link href="/Rush">Rush</Link>;
      </div>
      <div className={"basicNav"}>
        <Link href="/Actives">Actives</Link>;
      </div>
      <div className={"basicNav"}>
        <Link href="/Alumni">Alumni</Link>;
      </div>
      <div className={"basicNav"}>
        <Link href="/History">History</Link>;
      </div>
      <div className={"basicNav"}>
        <Link href="/Contact_us">Contact Us</Link>;
      </div>

      <div>
        <p>Greetings from the Home Page!</p>
      </div>
    </main>
  );
}
