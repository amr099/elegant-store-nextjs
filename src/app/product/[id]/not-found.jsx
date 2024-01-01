import Link from "next/link";

export default function NotFound() {
    return (
        <div className='center-content'>
            <h6>404 Not Found</h6>
            <p>Could not find the requested Product.</p>
            <Link href='/' className='button'>
                Go Back
            </Link>
        </div>
    );
}
