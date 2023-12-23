import Image from "next/image";
import Link from "next/link";

export default function CategoryThumbnail({ styles, title }) {
    return (
        <div className={styles}>
            <div>
                <h6>{title}</h6>
                <Link href={`/shop/${title}`} className='animated'>
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
