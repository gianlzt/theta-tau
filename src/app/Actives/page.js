// import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";

export default function Actives() {
  return (
    <main>
      <div className={"basicNav"}>
        <Link href="/">Home</Link>;
      </div>
      <div>
        <p>Greetings from the Actives Page!</p>
      </div>
    </main>
  );
}
