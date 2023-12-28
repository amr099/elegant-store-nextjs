import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h6>404 Not Found</h6>
            <p>Could not find the requested Product.</p>
            <Link href='/'>Go Back</Link>
        </div>
    );
}
