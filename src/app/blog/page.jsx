import Article from "../ui/Article/Article";
import styles from "./Blog.module.scss";

export default function Page() {
    return (
        <div className='container'>
            <div className={styles.blog}>
                <div className={styles.blogCover}>
                    <h3>Blog Page</h3>
                    <p>Home ideas and design inspiration</p>
                </div>

                <div className={styles.blogGrid}>
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </div>
            </div>
        </div>
    );
}
