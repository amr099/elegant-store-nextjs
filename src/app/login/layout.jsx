import { getServerSession } from "next-auth";
import styles from "./Login.module.css";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
    const session = await getServerSession();
    if (session) {
        redirect("/");
    }
    return <section className={styles.formGrid}>{children}</section>;
}
