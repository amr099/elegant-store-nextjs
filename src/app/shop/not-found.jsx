import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h6>404 Not Found</h6>
            <p>There is no products for this category.</p>
            <Link href='/shop'>Go Back</Link>
        </div>
    );
}
