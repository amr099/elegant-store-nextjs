import styles from "./Profile.module.scss";
import { getServerSession } from "next-auth";
import Sidebar from "./Sidebar";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
    const session = await getServerSession();
    if (!session) {
        redirect("/login");
    }

    return (
        <div className='container'>
            <div className={styles.user}>
                <h3 className={styles.h3}>My Account</h3>
                <div className={styles.profileContainer}>
                    <Sidebar user={session.user} />
                    {children}
                </div>
            </div>
        </div>
    );
}
