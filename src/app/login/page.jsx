import { getServerSession } from "next-auth";
import Form from "./form";
import { redirect } from "next/navigation";

export default async function SignIn() {
    const session = getServerSession();
    console.log(session);
    return <Form />;
}
