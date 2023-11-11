import LoginForm from "@/components/login-form"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const LoginPage = async () => {
    const session = await getServerSession(authOptions)

    if (session) {
        return redirect("/");
    }
    return (
        <div className="">
            <LoginForm />
        </div>
    )
}

export default LoginPage