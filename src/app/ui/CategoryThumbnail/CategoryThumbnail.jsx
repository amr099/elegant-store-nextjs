import Image from "next/image";
import Link from "next/link";

export default function CategoryThumbnail({ title, id }) {
    return (
        <div className={styles.categoryThumbnail}>
            <div>
                <h6>{title}</h6>
                <Link href={`/shop/${id}`} className='animated'>
                    Shop Now{" "}
                    <Image
                        src='/icons/arrow-right.svg'
                        alt='arrow'
                        width={24}
                        height={24}
                    />
                </Link>
            </div>
        </div>
    );
}
