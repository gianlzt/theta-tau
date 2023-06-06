// import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";

export default function Rush() {
  return (
    <main>
      <div className={"basicNav"}>
        <Link href="/">Home</Link>;
      </div>
      <div>
        <p>Greetings from the Rush Page!</p>
      </div>
    </main>
  );
}
