import styles from "../Cart.module.scss";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Summary from "./summary";
import Form from "./form";

export default async function Page() {
    const session = await getServerSession();
    if (!session) {
        redirect("/login");
    }

    return (
        <div className={styles.checkout}>
            <Form />
            <Summary />
        </div>
    );
}
