import Link from "next/link";

export default function NotFound() {
    return (
        <div className='center-content'>
            <h6>404 Not Found</h6>
            <p>There is no products for this category.</p>
            <Link href='/shop' className='button'>
                Go Back
            </Link>
        </div>
    );
}
