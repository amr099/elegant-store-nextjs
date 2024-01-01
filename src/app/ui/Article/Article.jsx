import Image from "next/image";
import styles from "./Article.module.scss";
import Link from "next/link";

export default function Article() {
    return (
        <article className={styles.article}>
            <img src='/imgs/article.png' alt='article' className={styles.img} />
            <div>
                <h6 className={styles.title}>7 ways to decor your home</h6>
                <Link href='#' className='animated'>
                    Read More{" "}
                    <Image
                        src='/icons/arrow-right.svg'
                        alt='arrow'
                        width={24}
                        height={24}
                    />
                </Link>
            </div>
        </article>
    );
}
