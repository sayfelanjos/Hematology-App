import { redirect } from "next/navigation";
import styles from "./page.module.scss";

// async function fetchTeam([app]) {
//   const res = await fetch("https://...");
//   if (!res.ok) return undefined;
//   return res.json();
// }

const RootPage = () => {
  return <div className={styles["root-page-background"]}></div>;
};

export default RootPage;
